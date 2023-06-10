import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'
import {FaInstagramSquare} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/vinay-yadav-coder" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/vinay-a1coder" target='_blank'><IoLogoGithub /></a>
        <a href="https://www.instagram.com/vinay_yadav_12go/" target='_blank'><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials