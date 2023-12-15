import React from 'react'
import Search from '../Search/Search'
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar=()=> {
  return (
    <div className='navBar'>
        <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit',fontSize:'25px' }}> Home</Link>
        <Search/>

    </div>
  )
}

export default NavBar