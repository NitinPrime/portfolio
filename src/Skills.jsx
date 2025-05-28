import React from 'react';
import './skills.css';
import './new.css';
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';
import LabelTag from './LabelTag';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h2 className='heading1 '>Projects</h2>

      <h3 className='heading2'>Languages</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="HTML" />
          <SemiDonutChart percentage={45} fill="#03B0FD" txt="CSS" />
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="JavaScript" />
        </div>
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="React JS" />
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="C" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="C++" />
        </div>
        <div className="flex">
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="Python" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="Java" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
        style={{ textAlign: 'center', marginTop: '2rem' }}
      >
        <h3 className='heading3'>Libraries & Tools</h3>
        <div>
          <LabelTag txt="React" fill="#03B0FD" />
          <LabelTag txt="Node.js" fill="#03B0FD" />
          <LabelTag txt="Express.js" fill="#03B0FD" />
          <LabelTag txt="NumPy" fill="#03B0FD" />
          <LabelTag txt="Pandas" fill="#03B0FD" />
          <LabelTag txt="TensorFlow" fill="#03B0FD" />
          <LabelTag txt="MongoDB" fill="#03B0FD" />
          <LabelTag txt="Git" fill="#03B0FD" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
