'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import HomeScreen from '@/components/screens/HomeScreen';
import CarAnimationScreen from '@/components/screens/CarAnimationScreen';
import MainScreen from '@/components/screens/MainScreen';
import DanceScreen from '@/components/screens/DanceScreen';
import PlayScreen from '@/components/screens/PlayScreen';
import FoodScreen from '@/components/screens/FoodScreen';
import SurpriseScreen from '@/components/screens/SurpriseScreen';
import HappyEndingScreen from '@/components/screens/HappyEndingScreen';
import ProposeScreen from '@/components/screens/ProposeScreen';
import FinalScreen from '@/components/screens/FinalScreen';
import ParticleBackground from '@/components/shared/ParticleBackground';

export type View = 'home' | 'car' | 'main' | 'dance' | 'play' | 'food' | 'surprise' | 'ending' | 'propose' | 'final';

const App: FC = () => {
  const [view, setView] = useState<View>('home');
  const [explored, setExplored] = useState({ dance: false, play: false, food: false });
  const [currentSong, setCurrentSong] = useState('');
  const [showParticles, setShowParticles] = useState(false);
  const [proposalResponse, setProposalResponse] = useState<'yes' | 'no' | null>(null);

  // Remove the requirement for all activities to be completed
  // The surprise screen can be accessed directly from any completed activity
  
  useEffect(() => {
    setShowParticles(true);
  }, []);

  const handleSetExplored = (section: 'dance' | 'play' | 'food') => {
    console.log(`Setting ${section} as explored`);
    setExplored((prev) => {
      const newExplored = { ...prev, [section]: true };
      console.log('New explored state:', newExplored);
      return newExplored;
    });
  };

  const handleSelectSong = (song: string) => {
    setCurrentSong(song);
    setView('dance');
  };

  const handleProposalResponse = (response: 'yes' | 'no') => {
    setProposalResponse(response);
    setView('final');
  };

  const handleRestart = () => {
    setView('home');
    setExplored({ dance: false, play: false, food: false });
    setProposalResponse(null);
    setCurrentSong('');
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomeScreen key="home" onEnter={() => setView('car')} />;
      case 'car':
        return <CarAnimationScreen key="car" onComplete={() => setView('main')} />;
      case 'main':
        return <MainScreen key="main" onSelect={(selection) => setView(selection)} />;
      case 'dance':
        return (
          <DanceScreen
            key="dance"
            onBack={() => setView('main')}
            onDance={() => {
              handleSetExplored('dance');
              // Dance marks as explored but stays on dance screen to enjoy the music
            }}
          />
        );
      case 'play':
        return (
          <PlayScreen
            key="play"
            onBack={() => setView('main')}
            onWin={() => {
              handleSetExplored('play');
              // Play marks as explored but stays on play screen to enjoy the games
            }}
          />
        );
      case 'food':
        return (
          <FoodScreen
            key="food"
            onBack={() => setView('main')}
            onComplete={() => {
              handleSetExplored('food');
              // Directly go to surprise screen after food completion
              setTimeout(() => setView('surprise'), 500);
            }}
          />
        );
      case 'surprise':
        return <SurpriseScreen key="surprise" onComplete={() => setView('ending')} />;
      case 'ending':
        return <HappyEndingScreen key="ending" onPropose={() => setView('propose')} />;
      case 'propose':
        return <ProposeScreen key="propose" onResponse={handleProposalResponse} />;
      case 'final':
        return <FinalScreen key="final" response={proposalResponse!} onRestart={handleRestart} />;
      default:
        return <HomeScreen onEnter={() => setView('car')} />;
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {showParticles && !['surprise', 'ending', 'propose', 'final'].includes(view) && (
        <ParticleBackground type="diya" count={15} />
      )}
      <div className="animate-fadeIn w-full h-full z-10">{renderView()}</div>
    </main>
  );
};

export default App;
