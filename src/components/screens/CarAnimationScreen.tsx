'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Car, Heart, MapPin } from 'lucide-react';
import type { FC } from 'react';

interface CarAnimationScreenProps {
  onComplete: () => void;
}

const CarAnimationScreen: FC<CarAnimationScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000);
    const timer2 = setTimeout(() => setStage(2), 3000);
    const timer3 = setTimeout(() => setShowMessage(true), 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-pink-100" />
      
      {/* Hostel */}
      <div className={`absolute top-20 left-10 transition-all duration-1000 ${stage >= 1 ? 'opacity-100' : 'opacity-50'}`}>
        <div className="bg-pink-200 p-4 rounded-lg shadow-lg">
          <MapPin className="w-8 h-8 text-pink-600 mx-auto mb-2" />
          <p className="text-sm font-semibold text-pink-800">Madhukar's place</p>
        </div>
      </div>

      {/* Car Animation */}
      <div className="relative w-full h-40 flex items-center justify-center">
        <div 
          className={`transition-all duration-3000 ease-in-out transform ${
            stage === 0 ? 'translate-x-[-200px]' : 
            stage === 1 ? 'translate-x-0' : 
            'translate-x-[200px]'
          }`}
        >
          <div className="relative">
            <Car className="w-16 h-16 text-red-500 animate-bounce" />
            <Heart className="w-6 h-6 text-pink-500 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Message */}
      {showMessage && (
        <div className="text-center space-y-4 animate-fadeIn">
          <h2 className="text-4xl font-headline text-primary">
            Get down sir! 🚗💕
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready for our virtual date night? 
          </p>
          <Button 
            onClick={onComplete}
            size="lg" 
            className="text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Let's Go! 🎉
          </Button>
        </div>
      )}
    </div>
  );
};

export default CarAnimationScreen;