import React from 'react'
import logo from '../assets/svg/logo.svg'

const Header = () => {
  return (
<header>
  <div className="container header_container">
    <a href="#">
        <img src={logo} alt="logo" className="logo" />
    </a>

    <nav className="nav_links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </nav>

    <button className="btn_demo">Request Demo</button>
  </div>
</header>


  )
}

export default Header