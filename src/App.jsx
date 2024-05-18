import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Events from './components/pages/Events';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/blog' element={<Blog />} />
        <Route path='/events' element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;