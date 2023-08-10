import React from 'react'
import { Link } from 'react-router-dom'

import './AboutUs.css'

function AboutUs() {
  return (
    <div className='about-us-container'>
        <h2>Who We Are</h2>

        <div>
            <h3>Karma Ghale 🌳</h3>
            <span>Adventurous · Nature Lover</span>
            <p>
            Greetings! I'm Karma Ghale, a current student at Pursuit—a non-profit organization dedicated to empowering individuals through a year-long software development bootcamp. 
            My aspiration is to contribute my skills as a software engineer or developer within the tech industry. 
            I've always been captivated by technology's potential to create meaningful change, and software engineering provides the perfect avenue for me to bring innovative solutions to life.
            </p>
            <br />
            <Link className='about-us-link' to={`https://github.com/KarmaG-7`}>Visit Me On Github!</Link>
        </div>

        <br />
        <hr />

        <div>
            <h3>Onyx McQueen 🍞</h3>
            <span>Problem Solver · Imaginative</span>
            <p>
            I'm Onyx, a dedicated problem solver with a vivid imagination. 
            Astronomy and movies are my twin passions that fuel my curiosity and drive. 
            Exploring the universe and unraveling intricate plots on screen inspire me to think creatively and approach challenges with innovative solutions.
            </p>
            <br />
            <Link className='about-us-link' to={`https://github.com/OnyxMcQueen`}>Visit Me On Github!</Link>
        </div>

    </div>
  )
}

export default AboutUs