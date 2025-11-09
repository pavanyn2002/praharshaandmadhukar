'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Star, RefreshCw } from 'lucide-react';
import type { FC } from 'react';

interface FinalScreenProps {
  response: 'yes' | 'no';
  onRestart: () => void;
}

const FinalScreen: FC<FinalScreenProps> = ({ onRestart }) => {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    setShowFireworks(true);
  }, []);

  return (
      <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-pink-300 via-red-200 to-purple-300">
        {/* Fireworks Effect */}
        {showFireworks && (
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(15)].map((_, i) => (
              <div key={i}>
                <Sparkles
                  className="absolute text-yellow-400 animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    fontSize: `${Math.random() * 15 + 10}px`
                  }}
                />
                <Star
                  className="absolute text-white animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 12 + 8}px`
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
          <div className="text-center space-y-6 md:space-y-8 w-full max-w-2xl mx-auto">
            <div className="animate-fadeIn space-y-6 md:space-y-8">
              {/* Celebration Header */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white drop-shadow-lg animate-bounce leading-tight">
                  🎉 Forever Together! 🎉
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline text-pink-800">
                  My Beautiful Fiancée! 💍✨
                </h2>
              </div>

              {/* Celebration Message */}
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-2 md:border-4 border-pink-300 w-full">
                <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6">
                  <Heart className="w-12 md:w-16 h-12 md:h-16 text-red-500 mx-auto animate-pulse" />

                  <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-gray-700">
                    <p className="text-lg md:text-2xl font-headline text-primary">
                      "Thank you for making this the most magical date ever! 💕"
                    </p>
                    <p className="text-sm md:text-base">
                      "Our virtual celebration was just the beginning. I can't wait for all the real festivals,
                      dates, and adventures we'll share together! 🌟"
                    </p>
                    <p className="text-sm md:text-base">
                      "From virtual dances to real-life romance, from distant love to forever together -
                      this is our beautiful love story! 📖💖"
                    </p>
                    <p className="text-base md:text-xl font-semibold text-red-600">
                      "I love you, Madhukar! Here's to our forever! 🥂✨"
                    </p>
                  </div>

                  <div className="pt-4 md:pt-6">
                    <Button
                      onClick={onRestart}
                      size="lg"
                      className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    >
                      <RefreshCw className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                      Relive Our Magical Night 💫
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FinalScreen;