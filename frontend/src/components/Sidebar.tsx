import React, { useState } from 'react'
import { AiFillHome, AiFillCode, AiFillMail, AiFillGithub } from 'react-icons/ai'
import { FaUser, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsCardImage } from 'react-icons/bs'

import '../styles/Sidebar.css'

const Sidebar = () => {
  const [state, setState] = useState({
    selection: 'home',
    active: true
  })

  const toggleActive = (e: any) => {
    e.preventDefault()
    setState({
      ...state,
      selection: e.target.parentElement.id,
    })
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>Logo</div>
      <div className='sidebar-links'>
        <button className='button' id='home'>
          <AiFillHome className={state.selection === 'home' ? 'active sidebar-icon' : 'sidebar-icon'} />
          <div className='wrapper-btn' onClick={toggleActive}></div>
        </button>
        <button className='button' id='user'>
          <FaUser className={state.selection === 'user' ? 'active sidebar-icon' : 'sidebar-icon'} id='user' />
          <div className='wrapper-btn' onClick={toggleActive}></div>
        </button>
        <button className='button' id='card'>
          <BsCardImage className={state.selection === 'card' ? 'active sidebar-icon' : 'sidebar-icon'} id='card' />
          <div className='wrapper-btn' onClick={toggleActive}></div>
        </button>
        <button className='button' id='code'>
          <AiFillCode className={state.selection === 'code' ? 'active sidebar-icon' : 'sidebar-icon'} id='code' />
          <div className='wrapper-btn' onClick={toggleActive}></div>
        </button> 
        <button className='button' id='mail'>
          <AiFillMail className={state.selection === 'mail' ? 'active sidebar-icon' : 'sidebar-icon'} id='mail' />
          <div className='wrapper-btn' onClick={toggleActive}></div>
        </button>
      </div>
      <div className='sidebar-social'>
        <button className='button'>
          <AiFillGithub className='sidebar-social-icon' />
        </button>
        <button className='button'>
          <FaFacebookF className='sidebar-social-icon' />
        </button>
        <button className='button'>
          <FaLinkedinIn className='sidebar-social-icon' />
        </button>
      </div>
    </div>
  )
}

export default Sidebar