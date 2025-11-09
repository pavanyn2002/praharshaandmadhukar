'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Brain, Gamepad2 } from 'lucide-react';
import type { FC } from 'react';

interface GameSelectionScreenProps {
  onBack: () => void;
  onSelectGame: (game: 'action' | 'guessing') => void;
}

const GameSelectionScreen: FC<GameSelectionScreenProps> = ({ onBack, onSelectGame }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Button variant="ghost" size="icon" className="absolute top-6 left-6" onClick={onBack}>
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline text-primary">
          Choose Your Game! 🎮
        </h2>
        <p className="text-xl text-muted-foreground">
          Let's have some fun together! Pick a game to play 💕
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Action Game */}
          <Card 
            className="cursor-pointer hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group"
            onClick={() => onSelectGame('action')}
          >
            <CardHeader className="text-center space-y-4">
              <div className="relative">
                <Zap className="w-16 h-16 text-orange-500 mx-auto group-hover:animate-bounce" />
                <Gamepad2 className="w-8 h-8 text-orange-400 absolute -top-2 -right-2 animate-pulse" />
              </div>
              <CardTitle className="font-headline text-2xl text-orange-600">
                Festival Rush! ⚡
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground text-lg">
                Fast-paced action game! Click falling diyas and dandiya sticks before they disappear.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">⏱️ 30 seconds</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">🎯 Quick reflexes</span>
                </div>
                <p className="text-orange-600 font-semibold">Perfect for adrenaline lovers! 🔥</p>
              </div>
            </CardContent>
          </Card>

          {/* Guessing Game */}
          <Card 
            className="cursor-pointer hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group"
            onClick={() => onSelectGame('guessing')}
          >
            <CardHeader className="text-center space-y-4">
              <div className="relative">
                <Brain className="w-16 h-16 text-purple-500 mx-auto group-hover:animate-pulse" />
                <span className="text-2xl absolute -top-2 -right-2 animate-bounce">🤔</span>
              </div>
              <CardTitle className="font-headline text-2xl text-purple-600">
                Festival Quiz! 🧠
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground text-lg">
                Test your knowledge! Guess items from emoji clues and hints.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">🎭 5 items</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">💡 Hints available</span>
                </div>
                <p className="text-purple-600 font-semibold">Perfect for thoughtful minds! ✨</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-pink-50 rounded-lg border-2 border-pink-200">
          <p className="text-pink-800 text-lg">
            💕 <strong>Pro Tip:</strong> Both games are equally fun! Choose based on your mood - 
            action for excitement or quiz for a cozy challenge together! 🌸
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameSelectionScreen;