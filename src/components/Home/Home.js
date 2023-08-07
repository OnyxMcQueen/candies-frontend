import React from 'react'
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <>
      <div className='hero-image'>
        <h1 className='header' style={{paddingTop: "100px"}}>Welcome to CandyLand! 🍬</h1>
        <div style={{textAlign: "center", marginLeft: "390px"}}>
          <p style={{color: "#000000", width: "60%", fontSize: "20px", paddingTop: "20px"}}> Indulge in a sweet and delightful experience at Candy World, your ultimate destination for all things candy! Discover a delightful array of popular candies from around the world, each with its own unique flavor and charm.</p>
        </div>
        <div style={{textAlign: "center", marginTop: "110px"}}>
          <Link to='/candies/new'><button>Personalize your candy list!</button></Link>
        </div>
        <p style={{paddingTop: "140px", color: "#000000", fontWeight: "bold"}}>Created By Karma Ghale & Onyx McQueen</p>
      </div>
    </>
  )
}

export default Home