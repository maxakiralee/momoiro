import React from 'react';
import style from './Style.module.css';
import './index.css';
import { useAudio } from './Audio';

function Slides() {
    const { playAudio } = useAudio();

  return (
    <div className={style.container}>

      <p className={style.text}>
        blah
      </p>
      <div className={style.buttonContainer}>
        <button className={style.button}>Back</button>
        <button className={style.button}>Next</button>
      </div>

    </div>
  );
}

export default Slides;