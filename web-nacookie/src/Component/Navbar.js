import React from 'react'
import './Navbar.css'
import logo from '../assets/navbar/logo.png'

function Navbar () {
  return (
    <nav className="navbar">
      <div className='navbar'>
        <div className='navbar-logo'>
           <a className="navbar-brand" >
             <img src={logo} alt="" width="70" height="70" className="d-inline-block align-text-top"/>
                  NACOOKIE OAT            </a>
       </div>
       <div className='navbar-menu'> 
       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Our Menu</a>
            </li>
           <li className="nav-item">
             <a className="nav-link" href='#'>Review</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href='#'>Contact</a>
           </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
