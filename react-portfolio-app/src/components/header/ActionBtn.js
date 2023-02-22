import React from 'react'
import CV from '../../assets/CV.pdf'

const ActionBtn = () => {
  return (
    <div className='action-btn'>
        <a href={CV} download className='btn'>Download CV!</a>
        <a href="#contact" className='btn btn-primary'>Get In Touch!</a>
    </div>
  )
}

export default ActionBtn