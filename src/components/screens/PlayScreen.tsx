'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import GameSelectionScreen from './GameSelectionScreen';
import ActionGameScreen from './ActionGameScreen';
import GuessingGameScreen from './GuessingGameScreen';

interface PlayScreenProps {
  onBack: () => void;
  onWin: () => void;
}

type GameView = 'selection' | 'action' | 'guessing';

const PlayScreen: FC<PlayScreenProps> = ({ onBack, onWin }) => {
  const [currentView, setCurrentView] = useState<GameView>('selection');
  const [gameCompleted, setGameCompleted] = useState(false);

  // Mark as complete as soon as the play section is entered
  useEffect(() => {
    if (!gameCompleted) {
      setGameCompleted(true);
      onWin(); // Mark the play activity as completed immediately
    }
  }, [gameCompleted, onWin]);

  const handleGameComplete = () => {
    // This is now redundant since we complete on entry, but keeping for consistency
    if (!gameCompleted) {
      setGameCompleted(true);
      onWin();
    }
  };

  const handleBackToSelection = () => {
    setCurrentView('selection');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'selection':
        return (
          <GameSelectionScreen
            onBack={onBack}
            onSelectGame={(game) => setCurrentView(game)}
          />
        );
      case 'action':
        return (
          <ActionGameScreen
            onBack={handleBackToSelection}
            onComplete={handleGameComplete}
          />
        );
      case 'guessing':
        return (
          <GuessingGameScreen
            onBack={handleBackToSelection}
            onComplete={handleGameComplete}
          />
        );
      default:
        return (
          <GameSelectionScreen
            onBack={onBack}
            onSelectGame={(game) => setCurrentView(game)}
          />
        );
    }
  };

  return renderCurrentView();
};

export default PlayScreen;
