import React, { useState } from 'react';
import style from './Style.module.css';
import './index.css';
import { useAudio } from './Audio';

function Slides() {
  const { playAudio } = useAudio();

  // Array of strings to display
  const textArray = ["First Text", "Second Text", "Third Text", "Fourth Text"];

  // State to track the current index of the text array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for the Next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < textArray.length - 1) {
        return prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };

  // Handler for the Back button
  const handleBack = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return prevIndex;
      }
    });
  };

  return (
    <div className={style.container}>
      <p className={style.text}>
        {textArray[currentIndex]}
      </p>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={handleBack} disabled={currentIndex === 0}>Back</button>
        <button className={style.button} onClick={handleNext} disabled={currentIndex === textArray.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default Slides;
