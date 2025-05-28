import React from 'react'
import Card from './Card';
import restaurant from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import chess from"./images/chess.jpg"
import snake from "./images/snake.jpg"
import wise_way from"./images/wise_way.jpg"
import kriya from"./images/kriya.jpg"
import url from"./images/url.jpg"

import { motion } from 'framer-motion';

const Projects = () => {
  const cards = [
    {
      imageUrl: restaurant,
      altText: 'Inventory Management System',
      title: 'Inventory Management System',
      description: 'A role-based inventory system using React, Node.js, and MySQL with automated workflows saving 30+ hours/month.',
      explore: 'https://github.com/NitinPrime/InventoryManagementSystem' // Replace with actual repo URL
    },
    {
      imageUrl: chess,
      altText: 'SaaS AI Platform',
      title: 'SaaS AI Platform',
      description: 'A modular SaaS platform with AI-powered tools for data-driven decision-making using Next.js, Tailwind, and Prisma.',
      explore: 'https://github.com/yourusername/saas-ai-platform' // Replace with actual repo URL
    },
    {
      imageUrl: snake,
      altText: 'Accident Detection System',
      title: 'Remote Accident Detection System',
      description: 'Real-time vehicle accident detection using deep learning with TensorFlow and OpenCV, built at NUS GAIP.',
      explore: 'https://github.com/NitinPrime/InventoryManagementSystem_PSG' // Replace with actual repo URL
    },
    {
      imageUrl: wise_way,
      altText: 'Alumni Interaction Website',
      title: 'Alumni Interaction Website',
      description: 'Logged datas of alumni and their achievements, allowing students to connect with alumni for mentorship and networking.',
    
    },
    {
      imageUrl: kriya,
      altText: 'Home page for Kriya 2025',
      title: 'Home page for Kriya 2025',
      description: 'Designed a visually stunning homepage for Kriya 2025, showcasing the event\'s theme and key highlights.',
    
    },
    {
      imageUrl: url,
      altText: 'URL Shortener',
      title: 'URL Shortener',
      description: 'A simple URL shortener web application with a Node.js + Express backend and React frontend. This project allows users to create shortened URLs and redirect to the original URLs.',
    
    }
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: '-100px', once: true }}
      className="up_gap"
      id="project"
    >
      <h2 className='heading1 down_gap'>Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
            
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
