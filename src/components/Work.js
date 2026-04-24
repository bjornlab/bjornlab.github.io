import React from "react"

const projects = [
  {
    icon: "🌱",
    title: "Climate Data Explorer",
    desc: "기후 변화 데이터를 수집·분석하고 미래 추세를 예측하는 인터랙티브 대시보드. IPCC 데이터셋을 기반으로 지역별 탄소 배출 패턴을 시각화합니다.",
    tags: ["Python", "D3.js", "FastAPI", "PostgreSQL"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "📊",
    title: "Market Intelligence Platform",
    desc: "국내외 시장 데이터를 실시간 수집하고 트렌드를 분석하는 플랫폼. 머신러닝 모델로 업종별 성장 패턴을 예측합니다.",
    tags: ["Python", "Scikit-learn", "React", "Redis"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "🔍",
    title: "Text Analytics Engine",
    desc: "뉴스, SNS, 리포트 등 비정형 텍스트 데이터를 NLP로 분석하는 엔진. 키워드 추출, 감성 분석, 토픽 모델링을 지원합니다.",
    tags: ["Python", "HuggingFace", "FastAPI", "Docker"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "⚡",
    title: "Energy Usage Optimizer",
    desc: "IoT 센서 데이터와 기상 데이터를 결합해 건물의 에너지 사용 패턴을 분석하고 최적화 방안을 제안하는 시스템입니다.",
    tags: ["Python", "Airflow", "TimescaleDB", "Grafana"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "🗺️",
    title: "Geo-spatial Analytics",
    desc: "지리 공간 데이터를 분석해 인구 이동, 도시 성장, 자원 분포를 시각화하는 도구. GeoJSON 기반의 인터랙티브 지도를 제공합니다.",
    tags: ["Python", "GeoPandas", "Mapbox", "Plotly"],
    github: "https://github.com/bjornlab",
    demo: null,
  },
  {
    icon: "🤖",
    title: "Predictive Modeling Suite",
    desc: "다양한 도메인에 적용 가능한 예측 모델 라이브러리. 시계열 예측, 이상 탐지, 분류 모델을 빠르게 프로토타이핑할 수 있습니다.",
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
          <h2 className="section-title">데이터로 만든 것들</h2>
          <div className="section-divider" />
          <p className="section-desc">
            지속 가능한 미래를 위한 분석 도구와 소프트웨어 프로젝트들입니다.
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
