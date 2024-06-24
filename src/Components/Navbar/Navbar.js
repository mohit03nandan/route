import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div class='nav'>
        <img className='ms-5 mt-1 d-none d-md-block' src={require('../../Images/Graviti.png')}  alt='logo'/>
    </div>
  )
}

export default Navbar