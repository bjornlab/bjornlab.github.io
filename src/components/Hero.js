import React from "react"

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-tag">Software &amp; Data Studio</p>
        <h1 className="hero-title">
          Bjorn Lab
        </h1>
        <p className="hero-subtitle">
          Analyzing &amp; Designing the Future<br />
          through Data &amp; Software
        </p>
        <p className="hero-desc">
          We collect, analyze, and predict data from across the world.<br />
          Complex problems solved through clear code and actionable insights.
        </p>
        <div className="hero-buttons">
          <a href="#work" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}

export default Hero
