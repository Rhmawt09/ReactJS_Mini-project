// import { logMissingFieldErrors } from '@apollo/client/core/ObservableQuery'
import React from 'react'
import './Navbar.css'
import logo from '../assets/navbar/logo.png'
import { Link } from 'react-router-dom'
import About from '../element/About'
import Contact from '../element/Contact'
import OurMenu from '../element/OurMenu'
import Review from '../element/Review'
import Banner from './Banner'


function Navbar () {
  return (
    <nav>
      <div className='navbar fixed-top'>
          <div className='navbar-logo'>
            <img src={logo} alt="" width="70" height="70" className="d-inline-block align-text-top"/>
                <h1 className='fs-4 fw-bold '>NACOOKIE OAT</h1> 

          </div>
            <div className='navbar-menu'> 
                <div className='menu'>
                  <span className='menu-span'><Link to='Home' className='menu-span'>Home</Link></span>
                  <span className='menu-span'><Link to='about' className='menu-span'>About Us</Link></span>
                  <span className='menu-span'><Link to='varian' className='menu-span'>Varian</Link></span>
                  <span className='menu-span'><Link to='contact' className='menu-span'>Order</Link></span>
                  <span className='menu-span'><Link to='review' className='menu-span'>Review</Link></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
