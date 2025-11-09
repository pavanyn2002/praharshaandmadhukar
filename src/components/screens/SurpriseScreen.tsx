'use client';

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import ParticleBackground from '../shared/ParticleBackground';
import Sparkle from '../shared/Sparkle';

interface SurpriseScreenProps {
  onComplete: () => void;
}

const SurpriseScreen: FC<SurpriseScreenProps> = ({ onComplete }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setShowParticles(true);
  }, []);

  const handleYesClick = () => {
    setButtonClicked(true);
    setTimeout(() => {
      onComplete();
    }, 3000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center w-full min-h-screen p-4 overflow-hidden">
      {showParticles && <ParticleBackground type="confetti" count={100} />}
      {showParticles && buttonClicked && <ParticleBackground type="firework" count={30} />}
      
      <div className="z-10 flex flex-col items-center space-y-10">
        <h1 className="text-4xl md:text-6xl font-headline text-primary max-w-3xl leading-tight">
          Madhukar, you make every festival brighter 🌸✨
        </h1>
        <p className="text-3xl md:text-5xl font-headline text-primary/80 max-w-3xl leading-tight">
          Will you be my forever date partner? 💖
        </p>

        {buttonClicked ? (
          <div className="relative mt-8 space-y-4">
            <Heart className="w-32 h-32 text-primary fill-current animate-ping" />
            <Heart className="absolute top-0 left-0 w-32 h-32 text-primary fill-current" />
            <p className="text-2xl text-primary mt-8 animate-pulse">
              Taking you to our special moment... 💫
            </p>
          </div>
        ) : (
          <div className="relative">
            <Button onClick={handleYesClick} size="lg" className="text-2xl px-12 py-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Heart className="w-8 h-8 mr-3 fill-current" />
              Yes
            </Button>
            {buttonClicked && <Sparkle />}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurpriseScreen;
