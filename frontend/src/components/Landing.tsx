import React from 'react'
import { BsFillMouseFill, BsChevronCompactDown } from 'react-icons/bs'

import '../styles/Landing.css'
import '../App.css'

const Landing = () => {
  return (
    <div className='landing'>
      <div className='content'>
        <p className='content-me text-spaced'>VLADIMIR ALEKSIC / NOVI SAD, SERBIA</p>
        <h1 className='content-title'>Welcome,<br />I'm Vladimir,<br />Full stack web developer.</h1>
        <p className='content-links text-spaced'>ABOUT ME / PROJECTS / GUIDES / CONTACT ME</p>
      </div>
      <div className='scroll'>
        <BsFillMouseFill className='mouse-icon' />
        <BsChevronCompactDown className='scroll-icon' />
      </div>
    </div>
  )
}

export default Landing