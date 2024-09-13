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
        <h1>React Developer</h1>
        <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link href="./resume.pdf" download="resume.pdf" className='btn btn-light'>Resume
              <i class="fa fa-download"></i>
            </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroImg
