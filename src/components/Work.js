import React from "react"

const projects = [
  {
    icon: "🌱",
    title: "Climate Data Explorer",
    desc: "An interactive dashboard for collecting, analyzing, and forecasting climate change data. Visualizes regional carbon emission patterns based on IPCC datasets.",
    tags: ["Python", "D3.js", "FastAPI", "PostgreSQL"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "📊",
    title: "Market Intelligence Platform",
    desc: "A platform for real-time collection and trend analysis of domestic and international market data. Uses ML models to predict growth patterns across industry sectors.",
    tags: ["Python", "Scikit-learn", "React", "Redis"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "🔍",
    title: "Text Analytics Engine",
    desc: "An NLP-powered engine for analyzing unstructured text from news, social media, and reports. Supports keyword extraction, sentiment analysis, and topic modeling.",
    tags: ["Python", "HuggingFace", "FastAPI", "Docker"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "⚡",
    title: "Energy Usage Optimizer",
    desc: "Combines IoT sensor data with weather data to analyze building energy usage patterns and recommend optimization strategies.",
    tags: ["Python", "Airflow", "TimescaleDB", "Grafana"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "🗺️",
    title: "Geo-spatial Analytics",
    desc: "A tool for analyzing geo-spatial data to visualize population movement, urban growth, and resource distribution. Provides interactive GeoJSON-based maps.",
    tags: ["Python", "GeoPandas", "Mapbox", "Plotly"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "🤖",
    title: "Predictive Modeling Suite",
    desc: "A prediction model library applicable across multiple domains. Enables rapid prototyping of time-series forecasting, anomaly detection, and classification models.",
    tags: ["Python", "PyTorch", "MLflow", "Docker"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
]

const Work = () => {
  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="work-intro">
          <p className="section-label">Work</p>
          <h2 className="section-title">Built with Data</h2>
          <div className="section-divider" />
          <p className="section-desc">
            Analysis tools and software projects for a sustainable future.
          </p>
        </div>
        <div className="work-grid">
          {projects.map(project => (
            <article key={project.title} className="work-card">
              <div className="work-card-header">
                <span className="work-card-icon">{project.icon}</span>
                <div className="work-card-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      ↗
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>
              <h3 className="work-card-title">{project.title}</h3>
              <p className="work-card-desc">{project.desc}</p>
              <div className="work-card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="work-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
