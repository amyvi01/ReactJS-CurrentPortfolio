import React from 'react'
import './contact.css'
import {FiSend} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dkabkea', 'template_uc7ux6d', form.current, 'gGaOaOJW-UjUO4lax')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiSend className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>amyphuongvi01@gmail.com</h5>
            <a href="mailto:amyphuongvi01@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Amy Vi</h5>
            <a href="https://www.linkedin.com/in/amy-vi-879b26246/" target="_blank">Visit site</a>
          </article>
          <article className="contact__option">
            <FaGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>Amy Vi</h5>
            <a href="https://github.com/amyvi01" target="_blank">Visit Site</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact