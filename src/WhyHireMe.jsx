import React from 'react';
import './why.css';
import scholar from './images/scholarship.png';
import project from './images/project.png';
import leetcode from './images/leetcode.png';
import { motion } from 'framer-motion';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="why-hire-wrapper"
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="why-container"
            >
                {/* Single unified box */}
                <div className="why-box-grid">
                    <div className="why-box">
                        <img src={scholar} alt="NTSE Scholar" className="why_logo" />
                        <h4 className="mid_text">2025</h4>
                        <p className="main_text_why">Academic Internship @ National University of Singapore</p>
                    </div>
                    <div className="why-box">
                        <img src={project} alt="Projects" className="why_logo" />
                        <h4 className="mid_text">6+</h4>
                        <p className="main_text_why">Completed Projects</p>
                    </div>
                    <div className="why-box">
                        <img src={leetcode} alt="Communication Skills" className="why_logo" />
                        <h4 className="mid_text">Excellent</h4>
                        <p className="main_text_why">Communication Skills</p>
                    </div>
                    <div className="why-box">
                        <img src={leetcode} alt="LeetCode" className="why_logo" />
                        <h4 className="mid_text">100+</h4>
                        <p className="main_text_why">LeetCode Problems Solved</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default WhyHireMe;
