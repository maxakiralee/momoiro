import React from 'react';
import '../../App.css';
import Mission from '../Mission';
import Review from '../Review';
import Latest from '../Latest';


import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Mission />
      <Latest />
      <Review />
      <Footer />
      {/* 
      <Footer /> */}
    </>
  );
}

export default Home;