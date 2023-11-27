import React, { useRef } from 'react'
import "./Parallax.css"
import { motion,useScroll,useTransform } from "framer-motion/dist/framer-motion"

function Parallax() {

    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
        className="Parallax"
        ref={ref}
        style={{
          background:"linear-gradient(180deg, #111132, #0c0c1d)",
        }}
      >
        <motion.h1 style={{ y: yText }}>
          My Work
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div
          className="planets"
          style={{
            y: yBg
          }}
        ></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
  )
}

export default Parallax
