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
          <span className="accent-block">비욘랩</span>
        </h1>
        <p className="hero-subtitle">
          지속 가능한 미래를 위한<br />
          데이터 분석 &amp; 소프트웨어 개발
        </p>
        <p className="hero-desc">
          세상의 모든 데이터를 분석하고 예측, 설계합니다.<br />
          복잡한 문제를 명확한 코드와 인사이트로 풀어냅니다.
        </p>
        <div className="hero-buttons">
          <a href="#work" className="btn-primary">프로젝트 보기</a>
          <a href="#contact" className="btn-secondary">연락하기</a>
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
