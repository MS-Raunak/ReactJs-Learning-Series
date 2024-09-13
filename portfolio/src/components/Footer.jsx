import React from 'react'
import "./FooterStyle.css"
import { FaFacebook, FaGit, FaGithub, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

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
                    +91-5672-78621
                </h4>
            </div>
            <div className="phone">
                <h4>
                    
                    <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    @ms@gmail.com
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>This is Raunak Kumar, Recent graduate with Computer Science & Enginnering and skilled in both backend and frontend development and currently seeking an opportunities as a Full Stack Developer.</p>
            <div className="social">
                <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <FaInstagram size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <FaGithub size={30} style={{color:'#fff', marginRight:'1rem'}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
