import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Formation from './Components/Formation/Formation'
import Experiences from './Components/Experience/Experience'
import Realisation from './Components/Realisation/Realisation'
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/formation' element= {<Formation/>} />
        <Route path='/experiences' element= {<Experiences/>} />
        <Route path='/realisations' element= {<Realisation/>} />
        <Route path='/contact' element= {<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
