'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Circle, Sparkles, Star } from 'lucide-react';
import type { FC } from 'react';

interface ProposeScreenProps {
  onResponse: (response: 'yes' | 'no') => void;
}

const ProposeScreen: FC<ProposeScreenProps> = ({ onResponse }) => {
  const [showProposal, setShowProposal] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowProposal(true), 1000);
    const timer2 = setTimeout(() => setShowHearts(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 relative overflow-hidden">
      {/* Romantic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-red-100 to-purple-200" />

      {/* Floating Hearts */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-red-400 animate-bounce opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                fontSize: `${Math.random() * 20 + 15}px`
              }}
            />
          ))}
        </div>
      )}

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 15 + 10}px`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto p-6">
        {showProposal && (
          <div className="animate-fadeIn space-y-8">
            {/* Ring Animation */}
            <div className="relative">
              <div className="relative w-24 h-24 mx-auto">
                <Circle className="w-24 h-24 text-yellow-500 animate-spin-slow drop-shadow-lg" strokeWidth={8} />
                <Circle className="w-16 h-16 text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" strokeWidth={4} />
                <div className="w-4 h-4 bg-pink-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
              </div>
              <Star className="w-6 h-6 text-yellow-300 absolute top-0 right-1/2 animate-ping" />
            </div>

            {/* Proposal Text */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-2 border-pink-200">
              <CardContent className="p-8 space-y-6">
                <h1 className="text-4xl md:text-5xl font-headline text-primary">
                  Will You Be Mine? 💕
                </h1>

                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    "My dearest Madhukar, 🌹"
                  </p>
                  <p>
                    "This virtual date has been the most beautiful experience of my life,
                    not because of the dances or games, but because I got to share every moment with you."
                  </p>
                  <p>
                    "Even though we're miles apart, you make every day feel like a festival.
                    Your smile is brighter than all the diyas, your laughter sweeter than any sweet."
                  </p>
                  <p className="font-semibold text-red-600">
                    " Will you be my partner for all the festivals to come?
                    Will you be my forever dance partner? 💃🕺"
                  </p>
                </div>

                <div className="flex justify-center pt-6">
                  <Button
                    onClick={() => onResponse('yes')}
                    size="lg"
                    className="text-xl px-12 py-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    💖 Forever Yours! 💖
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposeScreen;