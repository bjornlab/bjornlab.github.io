import React from "react"

const values = [
  {
    icon: "🌍",
    title: "지속 가능한 미래",
    desc: "환경·사회·기술 데이터를 분석해 지속 가능한 방향을 설계합니다.",
  },
  {
    icon: "🔬",
    title: "데이터 기반 사고",
    desc: "직관이 아닌 데이터로 의사결정을 지원합니다.",
  },
  {
    icon: "⚡",
    title: "실용적 구현",
    desc: "분석 결과를 실제 동작하는 소프트웨어로 구현합니다.",
  },
  {
    icon: "🎯",
    title: "명확한 인사이트",
    desc: "복잡한 데이터를 이해하기 쉬운 인사이트로 전달합니다.",
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
              미래를 분석하고<br />
              <span className="accent">설계하는 스튜디오</span>
            </h2>
            <div className="section-divider" />
            <p>
              비욘랩(Bjorn Lab)은 소프트웨어 개발과 데이터 분석을 결합한
              1인 창업 스튜디오입니다. 20년 이상의 개발 경험을 바탕으로
              복잡한 문제를 명확하게 해결합니다.
            </p>
            <p>
              기후 변화, 사회 구조, 산업 흐름 등 현재 세상의 모든 데이터를
              분석하고 예측합니다. 단순한 코딩을 넘어, 데이터로 미래를 그립니다.
            </p>
            <p>
              소프트웨어 설계부터 데이터 파이프라인, 분석 대시보드, AI 모델까지—
              전체 사이클을 혼자 처리할 수 있는 풀스택 역량을 갖추고 있습니다.
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
              <div className="stat-label">년 개발 경험</div>
              <div className="stat-desc">
                웹, 모바일, 시스템, 데이터 분야를 아우르는 풀스택 경력
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">데이터 탐색</div>
              <div className="stat-desc">
                세상의 모든 데이터를 분석 대상으로 삼습니다
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">인 스튜디오</div>
              <div className="stat-desc">
                기획부터 개발, 분석, 배포까지 전 과정을 담당합니다
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
