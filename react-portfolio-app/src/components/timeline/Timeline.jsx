import React from 'react'
import './timeline.css'
//import {BsBriefcaseFill} from 'react-icons/bs'

const Timeline = () => {
  return (
  <section id="timeline">
    <h2>Timeline</h2>
    <div className="container timeline__container">
      <div className="timeline-item">
          <div className="timeline-icon"/>
          {/*<BsBriefcaseFill/>*/}
          <div/>
          <p className="timeline-duration">Sep,2022 - 21 Dec 2023</p>
          <h5>Internship Project<span> - Western Sydney University</span></h5>
          <p>New Colombo Vitual Study Program</p>
      </div>
      <div className="timeline-item">
          <div className="timeline-icon"/>

          <div/>
          <p className="timeline-duration">Feb,2022 - June 2023</p>
          <h5>Front-End Intern<span> - SHIFA Wellbeing</span></h5>
          <p>Scheduler Website for SHIFA Wellbeing</p>
      </div>
      <div className="timeline-item">
          <div className="timeline-icon"/>

          <div/>
          <p className="timeline-duration">2020 - 16 Jan, 2023</p>
          <h5>University Student<span> - Western Sydney University</span></h5>
          <p>ICT degree Graduate - Major in Mobile Computing</p>
      </div>
      <div className="timeline-item">
          <div className="timeline-icon"/>
          <div/>
          <p className="timeline-duration">2016 - 2020</p>
          <h5>High School Student<span> - Moorebank High School</span></h5>
          <p>HSC Graduate</p>
      </div>
    </div>
  </section>
  )
}

export default Timeline