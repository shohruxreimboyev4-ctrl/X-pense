import React from 'react'
import logo from '../assets/svg/logo.svg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <a href="#">
        <img src={logo} alt="Logo" className="logo" />
        </a>

        <nav className="nav_links">
          <a href="#features">Features</a>
          <a href="#about">About us</a>
          <a href="#pricing">Pricing</a>
          <a href="#feedback">Feedback</a>
        </nav>

        <button className="btn_demo">Request a demo</button>
      </div>
    </header>
  )
}

export default Header