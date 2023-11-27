import React, { useRef } from 'react'
import {motion, useScroll, useSpring, useTransform} from "framer-motion/dist/framer-motion"
import './Portfolio.css'

const items = [
    {
        id:1,
        title:"Youtube Clone",
        img:"/images/yt-clone.png",
        link:"https://github.com/adityabhatt13/yt-clone",
        desc:"Cloned YouTube using React and Material-UI"
    },
    {
        id:2,
        title:"Ambience",
        img:"/images/ambience4.png",
        link:"https://github.com/adityabhatt13/Ambience",
        desc:"Electronics E-Commerce Website using HTML, CSS, JS"
    },
    {
        id:3,
        title:"Travel India",
        img:"/images/travelindia.png",
        link:"https://github.com/adityabhatt13/travel_india",
        desc:"For promoting tourism in India, developed using HTML, CSS, JS"
    },
    {
        id:4,
        title:"To-do List",
        img:"/images/todo-list.png",
        link:"https://github.com/adityabhatt13/todo-list",
        desc:"Todo List for keeping track of your tasks of the day"
    }
]

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress,[0,1],[-300,300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className='buttons'>
                            <button>See Demo</button>
                            <a href={item.link} target='_blank'><img src='/images/github.png' /></a>
                        </div>
                        
                    </motion.div>
                </div>
                
            </div>
        </section>
    )
}



function Portfolio() {

    const ref = useRef()

    const {scrollYProgress}  = useScroll({
        target:ref, 
        offset:["end end","start start"]
    })

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className='Portfolio' ref={ref}>
        <div className="progress">
            <h1>Projects</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>

        {items.map(item=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio
