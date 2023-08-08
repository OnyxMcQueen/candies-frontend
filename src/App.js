import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import AllCandies from './components/AllCandies/AllCandies';
import Candy from './components/Candy/Candy';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/candies' element={<AllCandies/>}/>
        <Route path='/candies/:id' element={<Candy />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
