// AudioContext.js
import React, { createContext, useContext, useRef } from 'react';
import AudioFile from './music.mp3';

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
      <audio ref={audioRef} src={AudioFile} loop />
    </AudioContext.Provider>
  );
};
