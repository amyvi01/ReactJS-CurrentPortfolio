import React from 'react'
import './portfolio.css'
import img2 from '../../assets/portfo2.png'
import img3 from '../../assets/portfo3.png'
import img4 from '../../assets/portfo4.png'

const data = [
  { 
    id:2,
    image: img2,
    title: 'HTML/CSS3/ReactJS travel website front page.',
    github: 'https://github.com/amyvi01',
    demo: 'http://traveller.amyphuongvi.com/',
  },
  { 
    id:3,
    image: img3,
    title: 'HTML/CSS3/JS unreleased portfolio.',
    github: 'https://github.com/amyvi01',
    demo: 'https://experimentalportfolio.amyphuongvi.com/',
  },
  { 
    id:4,
    image: img4,
    title: 'Basic HTML/CSS gallery website.',
    github: 'https://github.com/amyvi01',
    demo: 'https://basicgallery.amyphuongvi.com/',
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github,demo}) => {
            return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-btns">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio