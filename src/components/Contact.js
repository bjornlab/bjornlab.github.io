import React from "react"

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-label">Contact</p>
          <h2 className="section-title">함께 만들어 갑시다</h2>
          <div className="section-divider" style={{ margin: "0 auto 32px" }} />
          <p className="section-desc">
            데이터 분석 프로젝트, 소프트웨어 개발, 기술 자문 — 어떤 형태든
            먼저 이야기해요. 지속 가능한 미래를 위한 협업을 환영합니다.
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
            프로젝트 문의는 언제든지 환영합니다 →{" "}
            <a href="mailto:bjornlab@gmail.com">메일 보내기</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
