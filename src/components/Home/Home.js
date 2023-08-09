import React from 'react'
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <>
      <div className='hero-image'>
        <h1 className='header' style={{paddingTop: "100px"}}>Welcome to CandyLand! 🍬</h1>
        <div style={{margin: "0px auto", width: "80%"}}>
          <p style={{textAlign: "center", color: "#000000", fontSize: "20px", paddingTop: "20px", fontWeight: "bolder"}}> Indulge in a sweet and delightful experience at Candy Land, your ultimate destination for all things candy! Discover a delightful array of popular candies from around the world, each with its own unique flavor and charm.</p>
        </div>
        <div style={{textAlign: "center", marginTop: "110px"}}>
          <Link to='/candies/new'><button>Personalize your candy list!</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home