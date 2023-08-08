import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <footer className='bottom'>
        <Link to='/candies/about-us'><p>Created By Karma Ghale & Onyx McQueen</p></Link>
    </footer>
  )
}

export default Footer