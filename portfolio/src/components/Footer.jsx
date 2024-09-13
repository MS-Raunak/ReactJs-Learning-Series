import React from 'react'
import "./FooterStyle.css"
import { FaFacebook, FaGit, FaGithub, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                <div>
                    <p>123, Housing Society</p>
                    <p>Bengaluru, India</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                    <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    +918809197034
                </h4>
            </div>
            <div className="phone">
                <h4>
                    <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    raunakkr.saha@gmail.com
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>
            Hi, I'm Raunak Kumar, a recent graduate in Computer Science & Engineering. I have skills in both backend and frontend development and am currently seeking opportunities as a Full Stack Developer.
            </p>
            <div className="social">
                <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <FaInstagram size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <NavLink to="https://github.com/MS-Raunak?tab=repositories">
                <FaGithub size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                </NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
