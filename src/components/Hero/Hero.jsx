import React from 'react'
import { motion } from "framer-motion/dist/framer-motion"
import './Hero.css'

function Hero() {

  const textVariants = {
    initial:{
      x:-500,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren: 0.1,
      }
    }
  }

  const sliderVariants = {
    initial:{
      x:0,
    },
    animate:{
      x:"-800%",
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:50,
      }
    }
  }

  return (
    <div className='Hero'>
        <div className="wrapper">
            <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>ADITYA BHATT</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and Competitive Programmer</motion.h1>
                <div className='buttons'>
                    <a href='#Projects'><motion.button variants={textVariants}>See my latest works</motion.button></a>
                    <a href='#Contact'><motion.button variants={textVariants}>Contact Me</motion.button></a>
                </div>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          Competitive-Programmer Web-Developer Music-Producer
        </motion.div>
        <img src="/images/hero.png" alt="" />
    </div>
  )
}

export default Hero
