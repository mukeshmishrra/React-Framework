import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
 

  return (
    <div className='header'>
        <ul className='list-item'>
            <li className='link-item' > <NavLink activeClassName="active" to="/"  > Home  </NavLink>   </li>
            <li className='link-item' > <NavLink activeClassName="active" to="/about" > About  </NavLink>   </li>
            <li className='link-item' > <NavLink activeClassName="active" to="/service" > Service  </NavLink>   </li>
        </ul>
    </div>
  )
}

export default Header
