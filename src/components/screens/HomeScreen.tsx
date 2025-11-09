'use client';

import { Button } from '@/components/ui/button';
import type { FC } from 'react';

interface HomeScreenProps {
  onEnter: () => void;
}

const HomeScreen: FC<HomeScreenProps> = ({ onEnter }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 p-4 min-h-screen">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-headline text-primary drop-shadow-lg leading-tight">
        Virtual Date Night
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-sm md:max-w-md px-4">
        Hii Madhukar ✨ Get ready for our special virtual date 💃🕺
      </p>
      <Button 
        onClick={onEnter} 
        size="lg" 
        className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        I am waiting for you, get inn soon...
      </Button>
    </div>
  );
};

export default HomeScreen;
