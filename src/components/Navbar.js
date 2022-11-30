import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

import { Button } from 'primereact/button';


const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h1 className='logo'><i>PWC </i></h1> <span style={{fontSize:'large'}}>|Digital Accounting Manuals</span>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>


          {/* <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Services</li>
          </Link> */}
          <Link to='/skills' className='skills'>
          
            <li className="pi pi-question-circle"> Help</li>
          </Link>
          <Link to='/contact' className='home'>
            <li  className='pi pi-bell'> Notification</li>
          </Link>
          <Button icon="pi pi-user" className="p-button-rounded p-button-info" style={{marginRight:'20px'}} aria-label="User" />

        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar;
