import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import AllCandies from './components/AllCandies/AllCandies';
import Candy from './components/Candy/Candy';
import NewCandyForm from './components/NewCandyForm/NewCandyForm';
import EditCandy from './components/EditCandy/EditCandy';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/candies' element={<AllCandies />}/>
          <Route path='/candies/:id' element={<Candy />}/>
          <Route path='/candies/new' element={<NewCandyForm />}/>
          <Route path='/candies/edit/:id' element={<EditCandy />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <Footer />
      </Router>
    </React.Suspense>
  );
}

export default App;
