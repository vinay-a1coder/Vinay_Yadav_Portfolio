import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'
import {FaInstagramSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>VINAY YADAV</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Achievements</a></li>
        {/* <li><a href="#contact">Contact</a></li> */}
      </ul>

      <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/vinay-yadav-coder" target='_blank'
         rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/vinay-a1coder" target='_blank'
         rel="noopener noreferrer"><IoLogoGithub /></a>
        <a href="https://www.instagram.com/vinay_yadav_12go/" target='_blank'
         rel="noopener noreferrer"><FaInstagramSquare /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; VINAY YADAV, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer