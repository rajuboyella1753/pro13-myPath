import React from 'react'
import '../css/about.css'
import Student from '../source/student.webp'
 function About() {
  return (
    <>
    {/* About us session start */}
   {/* <h2 id='about'>About Us</h2> */}
   <div className="about container">
    <div className="one">
    <img src={Student} alt="" />
    </div>
    <div className="two">
      <h3>From Our Team</h3>
      <p>Hi friends, we are very glad to meet you, we hope our website is usefull on choosing your carrer.
        this website is to teach you how to learn the new Technology, here you can go with correct direction towards the paths,
        But from our side a small advice this is not final step,keep learning untill you reach your final Destiny,You can clear your True Destiny you can only by Practicing many times untill you Clear it , Our self we are from Mohan Babu University 
        and we are currently B.tech 3 Year Belongs to Computer Science and Engineering at Tirupati. We hope we meet once again by achiving our Goal's.
      </p>
    </div>
   </div>
   {/* About us session end */}
    </>
  )
}
export default About;
