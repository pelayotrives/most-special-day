import { useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';

const AudioButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/audio/woman.mp3'));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={togglePlay} className="group flex items-center justify-center size-10 bg-transparent border-2 border-white rounded-full transition-all duration-250 ease-in-out hover:size-12">
      <Volume2 className="size-5 text-white transition-all duration-250 ease-in-out group-hover:size-6" />
    </button>
  );
};

export default AudioButton;
