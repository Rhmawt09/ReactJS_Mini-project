// import { logMissingFieldErrors } from '@apollo/client/core/ObservableQuery'
import React from 'react'
import './Navbar.css'
import logo from '../assets/navbar/logo.png'


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
                  <span className='menu-span'><a href='#Home' className='menu-span'>Home</a></span>
                  <span className='menu-span'><a href='#about'className='menu-span'>About Us</a></span>
                  <span className='menu-span'><a href='#varian'className='menu-span'>Varian</a></span>
                  <span className='menu-span'><a href='#contact'className='menu-span'>Order</a></span>
                  <span className='menu-span'><a href='#review'className='menu-span'>Review</a></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
