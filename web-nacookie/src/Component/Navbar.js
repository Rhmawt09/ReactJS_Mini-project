import React from 'react'
import './Navbar.css'
import logo from '../assets/navbar/logo.png'

function Navbar () {
  return (
    <nav>
      <div className='navbar'>
        <div className='navbar-logo'>
             <img src={logo} alt="" width="70" height="70" className="d-inline-block align-text-top"/>
             <h1>NACOOKIE OAT</h1> 

       </div>
       <div className='navbar-menu'> 
         <div className='menu'>
           <span className='menu-span'>Home</span>
           <span className='menu-span'>About Us</span>
           <span className='menu-span'>Our Menu</span>
           <span className='menu-span'>Review</span>
           <span className='menu-span'>Contact</span>
         </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
