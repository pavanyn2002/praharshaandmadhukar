'use client';

import { Heart } from 'lucide-react';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-100/80 via-red-100/80 to-purple-100/80 backdrop-blur-sm border-t border-pink-200/50">
      <div className="container mx-auto px-4 py-3">
        <p className="text-center text-sm md:text-base text-gray-700 flex items-center justify-center gap-2">
          <span>With love from</span>
          <span className="font-semibold text-primary">Praharsha</span>
          <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-500 fill-current animate-pulse" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
