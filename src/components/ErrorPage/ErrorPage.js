import React from 'react'
import { useNavigate } from 'react-router-dom';

import './ErrorPage.css';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className='error-container'>
        <h2 className='error-h2'>Uh Oh! Something went wrong! 😖</h2>

        <img className='error-image' src='https://i.pinimg.com/1200x/16/a8/4b/16a84bdc8a1a826e3eea9a2936d9151e.jpg' alt='Spilled jar of candy'/>

        <p>Click the button below to return home.</p>
        <button className='error-button' onClick={() => navigate('/')}>Take Me Home!</button>
    </div>
  )
}

export default ErrorPage