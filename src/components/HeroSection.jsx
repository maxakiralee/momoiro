import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../styling/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-image'></div>
      <div className='hero-content'>
        <h1>Maui Strong</h1>
        <p>Empowering our community to thrive through support, healing, and connection</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <a 
            href="https://www.youtube.com/watch?v=Hi8HzojBkyU&t=2s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btns btn btn--primary btn--large"
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
