'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Music, UtensilsCrossed } from 'lucide-react';
import type { FC } from 'react';

interface MainScreenProps {
  onSelect: (selection: 'dance' | 'play' | 'food') => void;
}

const MainScreen: FC<MainScreenProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 p-4 min-h-screen">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline text-primary text-center mb-6 md:mb-8">Choose Your Adventure!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
        <Card
          className="cursor-pointer hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2"
          onClick={() => onSelect('dance')}
        >
          <CardHeader className="flex-col sm:flex-row items-center gap-3 md:gap-4 p-4 md:p-6">
            <Music className="w-8 md:w-10 h-8 md:h-10 text-primary" />
            <CardTitle className="font-headline text-lg md:text-2xl text-center sm:text-left">Dance with Me</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <p className="text-muted-foreground text-sm md:text-base text-center sm:text-left">Let's groove to some festive beats together! 💃</p>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2"
          onClick={() => onSelect('play')}
        >
          <CardHeader className="flex-col sm:flex-row items-center gap-3 md:gap-4 p-4 md:p-6">
            <Gamepad2 className="w-8 md:w-10 h-8 md:h-10 text-accent" />
            <CardTitle className="font-headline text-lg md:text-2xl text-center sm:text-left">Play with Me</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <p className="text-muted-foreground text-sm md:text-base text-center sm:text-left">Ready for a fun festival challenge? 🎮</p>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          onClick={() => onSelect('food')}
        >
          {/* Special indicator */}
          <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            ✨ Special
          </div>
          <CardHeader className="flex-col sm:flex-row items-center gap-3 md:gap-4 p-4 md:p-6">
            <UtensilsCrossed className="w-8 md:w-10 h-8 md:h-10 text-orange-500" />
            <CardTitle className="font-headline text-lg md:text-2xl text-center sm:text-left">Food Corner</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <p className="text-muted-foreground text-sm md:text-base text-center sm:text-left">Let's share some delicious treats! 🍽️</p>
            <p className="text-orange-600 font-semibold text-xs md:text-sm text-center sm:text-left mt-2">
              💕 The path to something magical...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainScreen;
