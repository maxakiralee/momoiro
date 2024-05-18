import React from 'react';
import '../../App.css';
import Mission from '../Mission';
import Review from '../Review';

import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Mission />
      <Review />
      <Footer />
      {/* 
      <Footer /> */}
    </>
  );
}

export default Home;