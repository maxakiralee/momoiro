import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import NewEvent from './pages/NewEvent';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/community' element={<Blog />} />
        <Route path='/events' element={<Events />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/newevent' element={<NewEvent />} />

        </Routes>
      </div>
    </Router>
  );
}
export default App;