import React from 'react'
import './AboutContentStyle.css'
import { Link } from 'react-router-dom'
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'

function AboutContent() {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am a java full stack developer</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className='img' alt="true" />
            </div>

            <div className="img-stack bottom">
                <img src={React2} className='img' alt="true" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
