import './main2.css'
import github from './images/github.png'
import linked_in from './images/linked_in.png'
import leetcodes from './images/leetcodes.png'
import whatsapp from './images/whatsapp.png'
import { motion } from 'framer-motion';
import Nitin from './images/Nitin.jpg';


const Main = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6, delay: 0.2
      }}
      className='Main' id="mainy"
    >
      <div className="main_left">
        <h3 className='it_is_me'>Hey! It's Me</h3>
        <h2 className='names'>Nitin S</h2>
        <p className='i_am_a'>I am a&nbsp;<span className="typewriter"></span></p>

        <div className="flex1">
          <p className='follow_me'>follow me: </p>
          <div className="logos">
            <a href="https://wa.me/919994563792">
              <img src={whatsapp} alt="WhatsApp" className="white-icon" />
            </a>
            <a href="https://github.com/NitinPrime" target="_blank" rel="noreferrer"><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/nitin-s-/" target="_blank" rel="noreferrer"><img src={linked_in} alt="" /></a>
            <a href="https://leetcode.com/u/NitinPrime/" target="_blank" rel="noreferrer"><img src={leetcodes} alt="" /></a>
          </div>
        </div>
        <div className="flex1">
          <a href="mailto:nitinprime2323@gmail.com"><button className='buttonc'>E-Mail Me</button></a>
          <button onClick={() => window.open("https://drive.google.com/file/d/1cixdAQVKjj4nFTpQ3Vejp837P7PFpTgW/view?usp=sharing", "_blank")} className='buttonb'>Resume</button>
        </div>
      </div>

      <div className="right_main" style={{ width: '500px', height: '500px' }}>
        <svg
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="clipShape" clipPathUnits="userSpaceOnUse">
              <path d="M921 673.5q-74 173.5-247.5 191t-347 0Q153 847 86.5 673.5T130 370q110-130 240-234.5t281-21Q802 198 898.5 349T921 673.5Z" />
            </clipPath>
            <linearGradient id="b" gradientTransform="rotate(-45 .5 .5)">
              <stop offset="0%" stopColor="#00cefc" />
              <stop offset="100%" stopColor="#3c1d4b" />
            </linearGradient>
          </defs>
          <path
            fill="url(#b)"
            clipPath="url(#clipShape)"
            d="M921 673.5q-74 173.5-247.5 191t-347 0Q153 847 86.5 673.5T130 370q110-130 240-234.5t281-21Q802 198 898.5 349T921 673.5Z"
          />
          <image
            href={Nitin}
            width="1000"
            height="1000"
            clipPath="url(#clipShape)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </motion.div>
  )
}

export default Main;
