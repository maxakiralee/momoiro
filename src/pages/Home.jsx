import React from 'react';
import '../App.css';
import Mission from '../components/Mission';
import Review from '../components/Review';
import Latest from '../components/Latest';


import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

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