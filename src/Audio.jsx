// AudioContext.js
import React, { createContext, useContext, useRef } from 'react';

const AudioContext = createContext();

export const useAudio = () => {
  return useContext(AudioContext);
};

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <AudioContext.Provider value={{ playAudio }}>
      {children}
      <audio ref={audioRef} src="/src/music.mp3" loop />
    </AudioContext.Provider>
  );
};
