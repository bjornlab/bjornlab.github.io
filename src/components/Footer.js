import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-logo">bjornlab</div>
      <p className="footer-tagline">
        지속 가능한 미래를 위해 — 데이터를 분석하고 예측하며 설계합니다
      </p>
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#stack">Stack</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a
          href="https://github.com/bjornlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
      <p className="footer-copy">© {year} Bjorn Lab. All rights reserved.</p>
    </footer>
  )
}

export default Footer
