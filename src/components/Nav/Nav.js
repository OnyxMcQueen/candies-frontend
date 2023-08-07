import React from 'react'
import { Link } from 'react-router-dom';

import './Nav.css';

function Nav() {
  return (
            <div className="navigation">
                <Link className='logo-container logo' to='/'>
                {" "}
                CandyLand
                </Link>
                <div className="menu">
                <Link to='/candies'>See all Candies</Link>    
                <Link to='/candies/new'>Create a New Candy</Link>
                <Link to='/about-us'>About Us</Link>
                </div>
            </div>
  )
}

export default Nav