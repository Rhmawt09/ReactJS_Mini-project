import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'

function Navbar (){
    return (

      <div className="navbar">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid center">
          <a className="navbar-brand" >
           <img src="https://o.remove.bg/downloads/fb75f91b-c0b5-441d-8140-00cd9af11147/logo_bulat-removebg-preview.png" alt="" width="50" height="50" className="d-inline-block align-text-top " />
            <p className='nav-logo-teks'>Nacookie Oat</p>
          </a>
       </div>
    </nav>
        <p className='navbar-home'>About Nacookie</p>
        <p className='navbar-home'>Our Menu</p>
        <p className='navbar-home'>Reviews</p>
        <p className='navbar-home'>Contact</p>

    </div>

    )
}

export default Navbar