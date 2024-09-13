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
        <p>- Java Full Stack Developer.</p>
        <p>- B.Tech in Computer Science Engineering, MPCT College, Gwalior, 2019-2023</p>
        <p>- <strong>Backend Technologies:</strong> Core Java, Spring Boot, Hibernate, Jpa, Spring MVC, Spring Security, JDBC, Servlet. </p>
        <p>- <strong>Frontend Technologies:</strong> HTML, CSS, JavaScript, ReactJs, Bootstrap, Thymeleaf, JSP.</p>
        <p>- <strong>Database Technologies:</strong> MySQL, Oracle</p>
        
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
