import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Events from './components/pages/Events';
import axios from 'axios';

function App() {



  // useEffect(() => {
  //   const newEvent = {
  //     eventName: "Hello",
  //     hour: 10,
  //     day: 3,
  //     month: 5,
  //     year: 2024,
  //     location: "This place",
  //     description: "A description",
  //     websiteURL: "cornhub.corn"
  //   }

  //   axios.post('http://localhost:5173/api/data', newEvent)
  //   .then(response => console.log(response.data))
  //   .catch(error => console.error(error));

  // }, []);


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