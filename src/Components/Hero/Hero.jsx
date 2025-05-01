import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css';
function Hero() {
  return (
    <div className='hero'>
        
        <div className='button'>
          <p><Link to="/login" className='btext'>Exam admin portal</Link></p>
          </div>
    </div>
  )
}

export default Hero;