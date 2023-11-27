import React from 'react'
import "./Navbar.css"
import Sidebar from '../Sidebar/Sidebar'

function Navbar() {
  return (
    <div className='Navbar'>
        <Sidebar />
        <div className='wrapper'>
            <span>Aditya Bhatt</span>
            <div className='social'>
                <a href='https://www.instagram.com/adi.tya.bhatt/' target='_blank'><img src="/images/instagram.png" alt="" /></a>
                <a href='https://www.linkedin.com/in/aditya-bhatt-132736219/' target='_blank'><img src="/images/linkedin.png" alt="" /></a>
                <a href='https://github.com/adityabhatt13' target='_blank'><img src="/images/github.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
