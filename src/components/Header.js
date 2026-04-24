import React from "react"

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        bjorn<span>lab</span>
      </a>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#stack">Stack</a>
        <a href="#work">Work</a>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
