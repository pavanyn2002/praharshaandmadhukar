'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Apple, Cherry, Grape, Cookie, Candy, Heart } from 'lucide-react';
import type { FC } from 'react';

interface FoodScreenProps {
  onBack: () => void;
  onComplete: () => void;
}

const FoodScreen: FC<FoodScreenProps> = ({ onBack, onComplete }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const juices = [
    { name: 'Apple Juice', icon: Apple, color: 'text-red-500', description: 'Fresh and crisp! 🍎' },
    { name: 'Watermelon Juice', icon: Cherry, color: 'text-pink-500', description: 'Sweet and refreshing! 🍉' },
    { name: 'Pineapple Juice', icon: Grape, color: 'text-yellow-500', description: 'Tropical delight! 🍍' }
  ];

  const sweets = [
    { name: 'Gulab Jamun', icon: Cookie, color: 'text-amber-600', description: 'Sweet like you! 🍯' },
    { name: 'Rasgulla', icon: Candy, color: 'text-white', description: 'Soft and spongy! 🤍' },
    { name: 'Jalebi', icon: Cookie, color: 'text-orange-500', description: 'Crispy and sweet! 🧡' }
  ];

  const specialDish = [
    { name: 'Rajma Chawal', icon: Heart, color: 'text-red-500', description: 'Your absolute favorite! Made with love 🍛❤️' }
  ];

  const handleItemSelect = (item: string) => {
    if (!selectedItems.includes(item)) {
      const newSelected = [...selectedItems, item];
      setSelectedItems(newSelected);
      
      if (newSelected.length >= 3) {
        setShowMessage(true);
      }
    }
  };

  const handleContinue = () => {
    console.log('Food screen: Continue clicked, calling onComplete');
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 p-2 md:p-4 min-h-screen">
      <div className="flex items-center justify-between w-full max-w-4xl px-2">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 text-sm md:text-base">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </Button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline text-primary text-center">
          Food Corner 🍽️
        </h2>
        <div className="w-12 md:w-20" />
      </div>

      <div className="text-center space-y-3 md:space-y-4 mb-6 md:mb-8 px-4">
        <p className="text-lg md:text-xl text-muted-foreground">
          Let's share some delicious treats together! Pick your favorites 💕
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="text-base md:text-lg font-semibold text-primary">
            Selected: {selectedItems.length}/3
          </span>
          {selectedItems.length >= 3 && (
            <span className="text-green-600 font-semibold text-sm md:text-base">✨ Ready to continue! ✨</span>
          )}
        </div>
      </div>

      {/* Juices Section */}
      <div className="w-full max-w-4xl px-2">
        <h3 className="text-xl md:text-2xl font-headline text-center mb-3 md:mb-4 text-orange-600">Fresh Juices 🥤</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
          {juices.map((juice) => (
            <Card
              key={juice.name}
              className={`cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                selectedItems.includes(juice.name) ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              onClick={() => handleItemSelect(juice.name)}
            >
              <CardHeader className="text-center p-3 md:p-6">
                <juice.icon className={`w-10 md:w-12 h-10 md:h-12 mx-auto ${juice.color}`} />
                <CardTitle className="font-headline text-lg md:text-xl">{juice.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-3 md:p-6 pt-0">
                <p className="text-muted-foreground text-sm md:text-base">{juice.description}</p>
                {selectedItems.includes(juice.name) && (
                  <Heart className="w-6 h-6 text-red-500 mx-auto mt-2 animate-pulse" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Dish Section - Rajma Chawal */}
      <div className="w-full max-w-4xl px-2">
        <h3 className="text-xl md:text-2xl font-headline text-center mb-3 md:mb-4 text-red-600">Madhukar's Special Favorite 💕</h3>
        <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8">
          {specialDish.map((dish) => (
            <Card
              key={dish.name}
              className={`cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 mx-auto max-w-sm md:max-w-md ${
                selectedItems.includes(dish.name) ? 'ring-2 md:ring-4 ring-red-500 bg-red-50 shadow-xl md:shadow-2xl' : 'border-2 border-red-200'
              }`}
              onClick={() => handleItemSelect(dish.name)}
            >
              <CardHeader className="text-center p-4 md:p-6">
                <dish.icon className={`w-12 md:w-16 h-12 md:h-16 mx-auto ${dish.color} ${selectedItems.includes(dish.name) ? 'animate-heartbeat' : ''}`} />
                <CardTitle className="font-headline text-xl md:text-2xl text-red-600">{dish.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-4 md:p-6 pt-0">
                <p className="text-muted-foreground text-base md:text-lg">{dish.description}</p>
                {selectedItems.includes(dish.name) && (
                  <div className="mt-3 md:mt-4 space-y-2">
                    <Heart className="w-6 md:w-8 h-6 md:h-8 text-red-500 mx-auto animate-pulse" />
                    <p className="text-red-600 font-semibold text-sm md:text-base">I know how much you love this! 😊</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sweets Section */}
      <div className="w-full max-w-4xl px-2">
        <h3 className="text-xl md:text-2xl font-headline text-center mb-3 md:mb-4 text-pink-600">Traditional Sweets 🍬</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {sweets.map((sweet) => (
            <Card
              key={sweet.name}
              className={`cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                selectedItems.includes(sweet.name) ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              onClick={() => handleItemSelect(sweet.name)}
            >
              <CardHeader className="text-center p-3 md:p-6">
                <sweet.icon className={`w-10 md:w-12 h-10 md:h-12 mx-auto ${sweet.color}`} />
                <CardTitle className="font-headline text-lg md:text-xl">{sweet.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-3 md:p-6 pt-0">
                <p className="text-muted-foreground text-sm md:text-base">{sweet.description}</p>
                {selectedItems.includes(sweet.name) && (
                  <Heart className="w-6 h-6 text-red-500 mx-auto mt-2 animate-pulse" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {showMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 md:p-8 rounded-lg text-center space-y-4 animate-fadeIn max-w-sm md:max-w-md mx-auto">
            <Heart className="w-12 md:w-16 h-12 md:h-16 text-red-500 mx-auto animate-pulse" />
            <h3 className="text-xl md:text-2xl font-headline text-primary">
              Yummy! Let's enjoy these together! 😋
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Nothing tastes better than sharing with you! 💕
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
              <Button onClick={onBack} variant="outline" className="text-sm md:text-base">
                Back to Menu
              </Button>
              <Button onClick={handleContinue} className="text-sm md:text-base">
                Continue Journey 💕
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodScreen;