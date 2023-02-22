import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#porfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/amy-vi-879b26246/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/amyvi01" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__credits">
              <a href="http://www.freepik.com">Parallax image designed by upklyak / Freepik</a>
      </div>


    </footer>
  )
}

export default Footer