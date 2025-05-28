import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';
import meImage from './images/me.png';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p className='about_me_left'>Hello! I’m Nitin S, a dedicated Full Stack Developer and AI/ML enthusiast currently pursuing my Bachelor of Technology in Information Technology at PSG College of Technology. I have hands-on experience building dynamic web applications using React, Node.js, and databases like MySQL. Alongside, I am deeply passionate about applying machine learning and deep learning techniques to solve real-world problems, such as accident detection systems.</p>
          <div className="about_me_right">
            <img src={meImage} alt="My Profile" />
            
          </div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
