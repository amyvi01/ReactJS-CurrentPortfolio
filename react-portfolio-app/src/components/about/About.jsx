import React from 'react'
import './about.css'
import ME from '../../assets/img1.jpg'
import {FaRegNewspaper} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaRegNewspaper className='about__icon'/>
              <h5>Experience</h5>
              <small> Developing Websites </small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small> 3+ Projects </small>
            </article>
          </div>
          <p>As you will see from my resume, I have experience with HTML, React, Typescript, SASS, 
            and CSS, which has provided me with a strong foundation in web development. 
            During my time as a student, I worked on several projects that allowed me 
            to develop my coding skills and knowledge, including a web application that 
            utilized React, Typescript, and CSS to create a user-friendly interface.
          </p>

          <a href="#contact" className='btn btn-primary'>Get In Touch</a>
        </div>
      </div>


    </section>
  )
}

export default About