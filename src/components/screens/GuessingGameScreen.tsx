'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Heart, Sparkles, Star } from 'lucide-react';
import type { FC } from 'react';
import { useState, useEffect } from 'react';

interface GuessingGameScreenProps {
  onBack: () => void;
  onComplete: () => void;
}

type FestivalItem = {
  id: number;
  name: string;
  emoji: string;
  hint: string;
  firstLetter: string;
  description: string;
};

const festivalItems: FestivalItem[] = [
  {
    id: 1,
    name: 'DANDIYA',
    emoji: '🥢',
    hint: 'Colorful sticks used for dancing',
    firstLetter: 'D',
    description: 'Traditional dance sticks! 💃'
  },
  {
    id: 2,
    name: 'DIYA',
    emoji: '🪔',
    hint: 'Small oil lamp that lights up the festival',
    firstLetter: 'D',
    description: 'Beautiful oil lamps! ✨'
  },
  {
    id: 3,
    name: 'GARBA',
    emoji: '💃',
    hint: 'Traditional dance form of Gujarat',
    firstLetter: 'G',
    description: 'The graceful dance we love! 🌸'
  },
  {
    id: 4,
    name: 'RANGOLI',
    emoji: '🎨',
    hint: 'Colorful floor art made with powder',
    firstLetter: 'R',
    description: 'Beautiful floor decorations! 🌈'
  },
  {
    id: 5,
    name: 'CHANIYA',
    emoji: '👗',
    hint: 'Traditional colorful skirt worn during festival',
    firstLetter: 'C',
    description: 'The beautiful traditional dress! 👸'
  }
];

const GuessingGameScreen: FC<GuessingGameScreenProps> = ({ onBack, onComplete }) => {
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'completed'>('ready');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [guessedItems, setGuessedItems] = useState<number[]>([]);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  const currentItem = festivalItems[currentItemIndex];

  useEffect(() => {
    if (guessedItems.length === festivalItems.length) {
      setGameState('completed');
      onComplete();
    }
  }, [guessedItems, onComplete]);

  const startGame = () => {
    setGameState('playing');
    setCurrentItemIndex(0);
    setScore(0);
    setAttempts(3);
    setShowHint(false);
    setGuessedItems([]);
    setUserGuess('');
  };

  const createParticles = () => {
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 2000);
  };

  const handleGuess = () => {
    if (!userGuess.trim()) return;

    if (userGuess.toUpperCase() === currentItem.name) {
      // Correct guess!
      setScore(prev => prev + 1);
      setGuessedItems(prev => [...prev, currentItem.id]);
      setShowCelebration(true);
      createParticles();
      
      setTimeout(() => {
        setShowCelebration(false);
        if (currentItemIndex < festivalItems.length - 1) {
          setCurrentItemIndex(prev => prev + 1);
          setUserGuess('');
          setAttempts(3);
          setShowHint(false);
        }
      }, 2000);
    } else {
      // Wrong guess
      setAttempts(prev => prev - 1);
      if (attempts <= 1) {
        // Show hint and reset attempts
        setShowHint(true);
        setAttempts(3);
      }
      setUserGuess('');
    }
  };

  const skipItem = () => {
    if (currentItemIndex < festivalItems.length - 1) {
      setCurrentItemIndex(prev => prev + 1);
      setUserGuess('');
      setAttempts(3);
      setShowHint(false);
    }
  };

  const getEndMessage = () => {
    if (score === festivalItems.length) return "Perfect! Madhukar, you know everything! 💖 You're incredible! 🎉";
    if (score >= 3) return "Amazing! You've got great knowledge! ✨ Let's celebrate together! 💕";
    return "Wonderful effort! You completed the quiz! 🎉 Let's continue our journey! 😊";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
      <Button variant="ghost" size="icon" className="absolute top-6 left-6 z-10" onClick={onBack}>
        <ArrowLeft className="h-6 w-6" />
      </Button>

      {/* Celebration Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute pointer-events-none z-50"
          style={{ left: particle.x, top: particle.y }}
        >
          <Heart className="w-6 h-6 text-red-500 animate-ping" />
        </div>
      ))}

      <h2 className="text-4xl md:text-5xl font-headline text-primary text-center mb-8">
        Festival Quiz! 🧠
      </h2>

      {gameState === 'ready' && (
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8 space-y-6">
            <div className="text-6xl">🎭</div>
            <h3 className="text-2xl font-headline text-primary">Ready to Test Your Knowledge?</h3>
            <p className="text-muted-foreground">
              I'll show you items and you guess what they are! 
              Let's see how well you know these beautiful traditions! 💕
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-800 text-sm">
                💡 <strong>How to play:</strong> Look at the emoji, type your guess, and get hints if needed!
              </p>
            </div>
            <Button onClick={startGame} size="lg" className="w-full">
              Start Quiz! 🎉
            </Button>
          </CardContent>
        </Card>
      )}

      {gameState === 'playing' && (
        <div className="w-full max-w-2xl mx-auto space-y-6">
          {/* Progress */}
          <div className="flex justify-between items-center text-lg">
            <span>Item {currentItemIndex + 1} of {festivalItems.length}</span>
            <span>Score: <span className="font-bold text-primary">{score}</span></span>
            <span>Attempts: <span className="font-bold text-accent">{attempts}</span></span>
          </div>

          {/* Main Game Card */}
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 text-center space-y-6">
              {showCelebration && (
                <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center z-10">
                  <div className="text-center space-y-4">
                    <div className="text-6xl animate-bounce">🎉</div>
                    <h3 className="text-3xl font-bold text-green-600">Correct!</h3>
                    <p className="text-xl">{currentItem.description}</p>
                  </div>
                </div>
              )}

              {/* Item Display */}
              <div className="space-y-4">
                <div className="text-8xl animate-pulse">{currentItem.emoji}</div>
                <h3 className="text-2xl font-headline text-primary">What am I?</h3>
              </div>

              {/* Hint Section */}
              {showHint && (
                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                  <p className="text-yellow-800 font-semibold">💡 Hint:</p>
                  <p className="text-yellow-700">{currentItem.hint}</p>
                  <p className="text-yellow-700 mt-2">First letter: <span className="font-bold text-xl">{currentItem.firstLetter}</span></p>
                </div>
              )}

              {/* Input Section */}
              <div className="space-y-4">
                <Input
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  placeholder="Type your guess here..."
                  className="text-center text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
                />
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleGuess} disabled={!userGuess.trim()}>
                    Guess! 🤔
                  </Button>
                  <Button onClick={skipItem} variant="outline">
                    Skip 👉
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${(guessedItems.length / festivalItems.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {gameState === 'completed' && (
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-4">
              <Sparkles className="w-16 h-16 text-yellow-500 mx-auto animate-spin" />
              <Star className="w-12 h-12 text-yellow-400 mx-auto animate-pulse" />
            </div>
            <h3 className="text-3xl font-headline text-primary">Quiz Complete! 🎊</h3>
            <p className="text-xl text-muted-foreground">{getEndMessage()}</p>
            <div className="text-lg">
              Final Score: <span className="font-bold text-primary text-2xl">{score}/{festivalItems.length}</span>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={startGame} variant="outline">
                Play Again 🔄
              </Button>
              <Button onClick={onBack}>
                Back to Games 🎮
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GuessingGameScreen;