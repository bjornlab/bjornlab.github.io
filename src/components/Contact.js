import React from "react"

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Build Together</h2>
          <div className="section-divider" style={{ margin: "0 auto 32px" }} />
          <p className="section-desc">
            Data analysis projects, software development, technical consulting —
            whatever the form, let's talk first. Collaboration toward a sustainable
            future is always welcome.
          </p>
          <div className="contact-cards">
            <a
              href="https://github.com/bjornlab"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-card-icon">🐙</span>
              <p className="contact-card-label">GitHub</p>
              <p className="contact-card-value">github.com/bjornlab</p>
            </a>
            <a href="mailto:bjornlab@gmail.com" className="contact-card">
              <span className="contact-card-icon">✉️</span>
              <p className="contact-card-label">Email</p>
              <p className="contact-card-value">bjornlab@gmail.com</p>
            </a>
          </div>
          <p className="contact-cta">
            Project inquiries are always welcome →{" "}
            <a href="mailto:bjornlab@gmail.com">Send a message</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
