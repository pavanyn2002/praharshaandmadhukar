'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Moon, Star, Sparkles } from 'lucide-react';
import type { FC } from 'react';

interface HappyEndingScreenProps {
    onPropose: () => void;
}

const HappyEndingScreen: FC<HappyEndingScreenProps> = ({ onPropose }) => {
    const [showStars, setShowStars] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const moonImages = [
        '/images/moon/moon1.jpg',
        '/images/moon/moon2.jpg'
    ];

    const madhukarImage = '/images/madhukar/madhukar.jpg';

    useEffect(() => {
        setShowStars(true);
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % 2);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
            {/* Animated Stars Background */}
            {showStars && (
                <div className="absolute inset-0 z-0">
                    {[...Array(20)].map((_, i) => (
                        <Star
                            key={i}
                            className={`absolute text-yellow-300 animate-pulse`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                fontSize: `${Math.random() * 10 + 10}px`
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
                <div className="text-center space-y-6 md:space-y-8 w-full max-w-6xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-white drop-shadow-lg">
                        Under the Stars 🌙✨
                    </h2>

                    <p className="text-lg md:text-xl text-pink-200 max-w-2xl mx-auto px-4">
                        As our virtual date comes to an end, let's cherish this beautiful moment together
                    </p>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
                    {/* Moon Section */}
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardContent className="p-6 text-center">
                            <Moon className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-headline text-white mb-4">Beautiful Moon 🌙</h3>
                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <img
                                    src={moonImages[currentImage]}
                                    alt="Beautiful Moon"
                                    className="w-full h-full object-cover transition-opacity duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                            <p className="text-pink-200 mt-4">
                                The moon reminds me of your beautiful smile 💫
                            </p>
                        </CardContent>
                    </Card>

                    {/* Madhukar Section */}
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardContent className="p-6 text-center">
                            <Sparkles className="w-8 h-8 text-pink-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-headline text-white mb-4">My Beautiful Madhukar 👸</h3>
                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <img
                                    src={madhukarImage}
                                    alt="Beautiful Madhukar"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                            <p className="text-pink-200 mt-4">
                                You're more beautiful than all the stars combined ⭐
                            </p>
                        </CardContent>
                    </Card>
                </div>

                    {/* Romantic Message */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 w-full max-w-2xl mx-auto border border-white/20">
                        <Heart className="w-10 md:w-12 h-10 md:h-12 text-red-400 mx-auto mb-4 animate-pulse" />
                        <p className="text-base md:text-lg text-white leading-relaxed">
                            "Distance means nothing when someone means everything. This virtual date was magical because I spent it with you.
                            Every dance, every game, every moment was perfect because you were there with me in spirit. 💕"
                        </p>
                    </div>

                    {/* Propose Button */}
                    <Button
                        onClick={onPropose}
                        size="lg"
                        className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        💍 Something Special Awaits 💍
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HappyEndingScreen;