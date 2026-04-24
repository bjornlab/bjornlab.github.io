import React from "react"

const values = [
  {
    icon: "🌍",
    title: "Sustainable Future",
    desc: "Analyzing environmental, social, and technological data to design a sustainable direction.",
  },
  {
    icon: "🔬",
    title: "Data-Driven Thinking",
    desc: "Supporting decisions through data, not intuition.",
  },
  {
    icon: "⚡",
    title: "Practical Implementation",
    desc: "Turning analysis results into real, working software.",
  },
  {
    icon: "🎯",
    title: "Clear Insights",
    desc: "Translating complex data into easy-to-understand insights.",
  },
]

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About</p>
            <h2 className="section-title">
              Analyzing &amp; Designing<br />
              <span className="accent">the Future</span>
            </h2>
            <div className="section-divider" />
            <p>
              Bjorn Lab is a solo software studio combining software development
              and data analysis. Built on 20+ years of engineering experience,
              it delivers clear solutions to complex problems.
            </p>
            <p>
              From climate change and social structures to industry trends —
              we analyze and predict real-world data. Beyond coding, we use
              data to envision and shape tomorrow.
            </p>
            <p>
              From software architecture and data pipelines to analytics
              dashboards and AI models — the full development cycle handled
              by a single, full-stack operator.
            </p>
            <div className="about-values">
              {values.map(v => (
                <div key={v.title} className="value-card">
                  <span className="value-icon">{v.icon}</span>
                  <p className="value-title">{v.title}</p>
                  <p className="value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years of Experience</div>
              <div className="stat-desc">
                Full-stack career spanning web, mobile, systems, and data
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Data Explored</div>
              <div className="stat-desc">
                Every dataset in the world is a potential subject of analysis
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Person Studio</div>
              <div className="stat-desc">
                Handling every stage — from planning and development to analysis and deployment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
