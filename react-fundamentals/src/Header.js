import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <ul className='list-item'>
            <li className='link-item' > <Link to="/" > Home  </Link>   </li>
            <li className='link-item' > <Link to="/about" > About  </Link>   </li>
            <li className='link-item' > <Link to="/service" > Service  </Link>   </li>
        </ul>
    </div>
  )
}

export default Header
