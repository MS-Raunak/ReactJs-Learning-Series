import React from 'react'
import "./HeroImgStyle.css"
import { Link } from 'react-router-dom'
import IntroImg from  "../assets/intro-bg.jpg"

function HeroImg() {
  return (
    <div className='hero'>
      <div className="mask">
        <img className='intro-img' src={IntroImg} alt="" />
      </div>


      <div className="content">
        <p>Hi, I am Raunak</p>
        <h1>Java Full Stack Developer</h1>
        <div className='btns'>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact
              {/* <i class="fa fa-download"></i> */}
            </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroImg
