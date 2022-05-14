import React from 'react'
import './Navbar.css'
import { MenuItems } from './MenuItems'
import logo from '../assets/navbar/logo.png'

function Navbar () {


  return (
    <nav className='navbar'>
      {/* <h1 className='navbar-logo'>NACOOKIE OAT<i className='fab fa-react'></i></h1> */}
      <img src={logo} style={{ width:'50px', margin: '4px' }}/>
      <div className='nav-menu' >
        <i></i>
      </div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>{item.title}</a>
            </li>
          )
        })}
      </ul>

    </nav>
  )
}

export default Navbar
