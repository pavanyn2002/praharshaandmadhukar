'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Flame } from 'lucide-react';
import type { FC } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import DandiyaIcon from '../icons/DandiyaIcon';
import Sparkle from '../shared/Sparkle';

interface ActionGameScreenProps {
  onBack: () => void;
  onComplete: () => void;
}

type Item = {
  id: number;
  x: number;
  y: number;
  type: 'diya' | 'dandiya';
  speed: number;
};

type Spark = {
  id: number;
  x: number;
  y: number;
};

const GAME_DURATION = 30; // seconds

const ActionGameScreen: FC<ActionGameScreenProps> = ({ onBack, onComplete }) => {
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'over'>('ready');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [items, setItems] = useState<Item[]>([]);
  const [sparkles, setSparkles] = useState<Spark[]>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const lastSpawnTime = useRef(0);
  const spawnInterval = useRef(1000);
  const gameTimerRef = useRef<NodeJS.Timeout>();

  const gameLoop = useCallback(() => {
    if (gameState !== 'playing') return;

    // Move existing items
    setItems(prevItems =>
        prevItems
        .map(item => ({ ...item, y: item.y + item.speed }))
        .filter(item => item.y < (gameAreaRef.current?.offsetHeight || window.innerHeight))
    );
    
    animationFrameId.current = requestAnimationFrame(gameLoop);
  }, [gameState]);
  
  useEffect(() => {
    if (gameState === 'playing') {
      lastSpawnTime.current = Date.now();
      animationFrameId.current = requestAnimationFrame(gameLoop);

      const spawnLoop = setInterval(() => {
        const now = Date.now();
        if (now - lastSpawnTime.current > spawnInterval.current) {
            lastSpawnTime.current = now;
            spawnInterval.current = Math.max(200, 1000 - score * 10);
            const gameAreaWidth = gameAreaRef.current?.offsetWidth || window.innerWidth;
            
            setItems(prevItems => [...prevItems, {
                id: Date.now(),
                x: Math.random() * (gameAreaWidth - 60),
                y: -50,
                type: Math.random() > 0.5 ? 'diya' : 'dandiya',
                speed: Math.random() * 2 + 1.5 + score * 0.05,
            }]);
        }
      }, 250);

      gameTimerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(gameTimerRef.current);
            clearInterval(spawnLoop);
            setGameState('over');
            // Always complete the activity when game ends
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if(animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        if (gameTimerRef.current) clearInterval(gameTimerRef.current);
        clearInterval(spawnLoop);
      }
    }
  }, [gameState, gameLoop, onComplete, score]);

  const handleItemClick = (itemId: number, x: number, y: number) => {
    if(gameState !== 'playing') return;
    setItems(items => items.filter(item => item.id !== itemId));
    setScore(prev => prev + 1);
    const newSparkleId = Date.now();
    setSparkles(prev => [...prev, { id: newSparkleId, x, y }]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkleId));
    }, 1000);
  };
  
  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setItems([]);
    setSparkles([]);
    setGameState('playing');
  };
  
  const getEndMessage = () => {
    if (score >= 15) return "Wow Madhukar! You're lightning fast! 💖 Amazing reflexes! 🎉";
    if (score >= 10) return "Great job! You've got quick hands! ✨ Well played! 💕";
    if (score >= 5) return "Good effort! You're getting the hang of it! 😊";
    return "Nice try! Activity completed! 🎉 Let's continue our journey! 💫";
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen p-4">
      <Button variant="ghost" size="icon" className="absolute top-6 left-6" onClick={onBack}>
        <ArrowLeft className="h-6 w-6" />
      </Button>
      
      <h2 className="text-4xl md:text-5xl font-headline text-primary text-center mb-4">
        Festival Rush! ⚡
      </h2>
      
      <div className="flex justify-between w-full max-w-2xl text-xl mb-4 px-4">
        <span>Score: <span className="font-bold text-accent">{score}</span></span>
        <span>Time: <span className="font-bold text-accent">{timeLeft}</span>s</span>
      </div>

      <div ref={gameAreaRef} className="relative w-full max-w-2xl h-[60vh] bg-card rounded-lg shadow-inner overflow-hidden border">
        {gameState === 'ready' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-4 p-6 text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-headline text-primary mb-4">Ready for Action?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Click the falling diyas 🪔 and dandiya sticks 🥢 as fast as you can! 
              Test your reflexes in this exciting festival rush!
            </p>
            <Button onClick={startGame} size="lg" className="text-lg px-8 py-4">
              Start Rush! 🚀
            </Button>
          </div>
        )}
        
        {gameState === 'over' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center p-4 z-20">
            <div className="bg-white rounded-lg p-8 max-w-md">
              <h3 className="text-3xl font-bold text-primary mb-4">Time's Up! ⏰</h3>
              <p className="text-xl text-muted-foreground mb-6">{getEndMessage()}</p>
              <div className="text-2xl font-bold text-accent mb-6">
                Final Score: {score} 🎯
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={startGame} variant="outline">
                  Play Again 🔄
                </Button>
                <Button onClick={onBack}>
                  Back to Games 🎮
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {items.map(item => (
          <div
            key={item.id}
            className="absolute cursor-pointer z-10 hover:scale-110 transition-transform"
            style={{ transform: `translate(${item.x}px, ${item.y}px)` }}
            onClick={(e) => {
              e.stopPropagation();
              handleItemClick(item.id, item.x, item.y);
            }}
          >
            {item.type === 'diya' ? (
              <Flame className="w-10 h-10 text-accent fill-current drop-shadow-lg" />
            ) : (
              <DandiyaIcon className="w-12 h-12 drop-shadow-lg" />
            )}
          </div>
        ))}
        
        {sparkles.map(spark => (
          <Sparkle key={spark.id} style={{ position: 'absolute', top: spark.y, left: spark.x, zIndex: 15 }} />
        ))}
      </div>
      
      {gameState === 'playing' && (
        <div className="mt-4 text-center">
          <p className="text-muted-foreground">
            💡 <strong>Tip:</strong> Click quickly! Items fall faster as you score more! 🏃‍♀️
          </p>
        </div>
      )}
    </div>
  );
};

export default ActionGameScreen;