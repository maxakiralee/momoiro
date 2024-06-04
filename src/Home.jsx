import React from 'react';
import style from './Style.module.css';
import './index.css';
import { useAudio } from './Audio';
import { Link } from 'react-router-dom';

function Home() {
  const { playAudio } = useAudio();

  return (
    <div className={style.container}>
      <p className={style.text}>
        use laptop! headphones on, volume up 😴🎶🔊
      </p>

      <Link to="/momoiro/slides" className={style.startButtonLink}>
        <button className={style.startButton} onClick={playAudio}>START</button>
        </Link>

    </div>
  );
}

export default Home;