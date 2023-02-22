import React from 'react'
import './header.css'
import ActionBtn from './ActionBtn'
import ParallaxImg from './ParallaxImg'

const Header = () => {
  return (
    <header>
      
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amy Phuong Vi</h1>
        <h5 className="text-light">Graduate Front End Developer</h5>
        <ActionBtn/>
        <ParallaxImg/>

        <a href="#contact" className='scroll__down'>Go To Contact</a>
      </div>
    </header>
  )
}

export default Header