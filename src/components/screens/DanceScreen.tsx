'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, Music, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { FC, useState, useEffect, useRef } from 'react';

interface DanceScreenProps {
  onBack: () => void;
  onDance: () => void;
}

const songs = [
  { name: 'Nagada Sang Dhol', url: '/nagada-sang-dhol.mp3' },
  { name: 'Chogada', url: '/chogada.mp3' },
];

// Simplified audio handling - no file testing to avoid errors

const catImageUrl = "/cat-dance.jpg";

const DanceScreen: FC<DanceScreenProps> = ({ onBack, onDance }) => {
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Initialize audio element
    if (!audioRef.current) {
      const audio = new Audio();
      audioRef.current = audio;
      
      // Set audio properties for better compatibility
      audio.preload = 'none'; // Don't preload to avoid errors
      audio.volume = 0.7;
      
      // Add essential event listeners only
      audio.addEventListener('ended', () => {
        console.log('Audio ended');
        setIsPlaying(false);
      });
      
      audio.addEventListener('loadeddata', () => {
        console.log('Audio data loaded successfully');
      });
      
      audio.addEventListener('error', (e) => {
        console.log('Audio load error - file may not exist or be accessible');
        setIsPlaying(false);
      });
    }
    
    // Cleanup function to pause audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !selectedSong) return;
  
    const song = songs.find(s => s.name === selectedSong);
    if (!song) return;
    
    console.log('Attempting to load song:', selectedSong, 'from:', song.url);
    
    // Reset audio state
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    
    // Check if file exists first
    const checkAndLoadAudio = async () => {
      try {
        // Test if the file is accessible
        const response = await fetch(song.url, { method: 'HEAD' });
        
        if (response.ok) {
          console.log('Audio file found, loading...');
          audio.src = song.url;
          audio.load();
          
          // Wait for audio to be ready before trying to play
          const handleCanPlay = async () => {
            try {
              await audio.play();
              setIsPlaying(true);
              console.log('Audio playing successfully');
            } catch (error) {
              console.log('Autoplay blocked - use play button');
              setIsPlaying(false);
            }
          };
          
          audio.addEventListener('canplay', handleCanPlay, { once: true });
        } else {
          console.log('Audio file not found:', song.url, 'Status:', response.status);
        }
      } catch (error) {
        console.log('Failed to check audio file:', error);
      }
    };
    
    checkAndLoadAudio();
  }, [selectedSong]);

  // Remove this useEffect as it's causing conflicts - we'll handle play/pause directly in the toggle function


  const handleSongSelect = (songName: string) => {
    if (songName === selectedSong) {
      setIsPlaying(prev => !prev);
    } else {
      setSelectedSong(songName);
      setIsLoading(true);
      setShowImage(false);

      setTimeout(() => {
        setIsLoading(false);
        setShowImage(true);
        onDance(); // Silently record the completion
      }, 1000);
    }
  };
  
  const handleTogglePlay = async () => {
    if (selectedSong && audioRef.current) {
      const audio = audioRef.current;
      
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        console.log('Audio paused');
      } else {
        // Check if audio has a valid source
        if (!audio.src || audio.src === '') {
          console.log('No audio source available');
          return;
        }
        
        try {
          console.log('Attempting to play audio from:', audio.src);
          
          // Ensure audio is loaded
          if (audio.readyState < 2) {
            console.log('Audio not ready, loading...');
            audio.load();
            
            // Wait for it to be ready
            await new Promise((resolve, reject) => {
              const handleCanPlay = () => {
                audio.removeEventListener('canplay', handleCanPlay);
                audio.removeEventListener('error', handleError);
                resolve(true);
              };
              
              const handleError = () => {
                audio.removeEventListener('canplay', handleCanPlay);
                audio.removeEventListener('error', handleError);
                reject(new Error('Audio failed to load'));
              };
              
              audio.addEventListener('canplay', handleCanPlay);
              audio.addEventListener('error', handleError);
            });
          }
          
          await audio.play();
          setIsPlaying(true);
          console.log('Audio playing successfully');
        } catch (error) {
          console.log("Play failed:", error.message);
          setIsPlaying(false);
        }
      }
    }
  }

  const handleBack = () => {
    setSelectedSong(null);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.src = "";
    }
    onBack();
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <Button variant="ghost" size="icon" className="absolute top-6 left-6" onClick={handleBack}>
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <h2 className="text-4xl md:text-5xl font-headline text-primary text-center mb-8">Pick a Song</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {songs.map((song) => (
          <Button
            key={song.name}
            onClick={() => handleSongSelect(song.name)}
            disabled={isLoading}
            size="lg"
            variant={selectedSong === song.name ? 'default' : 'outline'}
            className="text-lg"
          >
            {isLoading && selectedSong === song.name && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
            {song.name}
          </Button>
        ))}
      </div>

      <div className="w-full max-w-md aspect-square bg-card rounded-lg shadow-lg flex items-center justify-center overflow-hidden relative">
        {isLoading && (
          <div className="flex flex-col items-center text-muted-foreground">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p>Warming up the dance floor...</p>
          </div>
        )}
        {!isLoading && showImage && (
          <div className="w-full h-full relative sway" data-ai-hint="dancing cats">
            <Image src={catImageUrl} alt={`Cats dancing to ${selectedSong}`} layout="fill" objectFit="cover" />
          </div>
        )}
        {!isLoading && !showImage && (
          <div className="text-center text-muted-foreground p-8">
             <Music className="w-16 h-16 mx-auto text-primary/30 mb-4" />
            <p>Select a song to see our dance companions!</p>
          </div>
        )}
      </div>
      
      {selectedSong && !isLoading && showImage && (
        <div className="mt-6">
          <Button onClick={handleTogglePlay} size="lg" className="rounded-full w-24 h-24">
            {isPlaying ? <Pause className="h-12 w-12" /> : <Play className="h-12 w-12" />}
            <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default DanceScreen;
