import React from "react"

const stackData = [
  {
    category: "Languages",
    items: [
      { name: "Python", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "SQL", highlight: true },
      { name: "Bash", highlight: false },
      { name: "Go", highlight: false },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", highlight: true },
      { name: "Gatsby", highlight: true },
      { name: "Next.js", highlight: false },
      { name: "D3.js", highlight: false },
      { name: "Tailwind CSS", highlight: false },
      { name: "HTML / CSS", highlight: false },
    ],
  },
  {
    category: "Data & AI",
    items: [
      { name: "Pandas", highlight: true },
      { name: "NumPy", highlight: true },
      { name: "Scikit-learn", highlight: true },
      { name: "TensorFlow", highlight: false },
      { name: "PyTorch", highlight: false },
      { name: "Jupyter", highlight: false },
      { name: "Spark", highlight: false },
      { name: "Airflow", highlight: false },
    ],
  },
  {
    category: "Backend & Infra",
    items: [
      { name: "Node.js", highlight: false },
      { name: "FastAPI", highlight: false },
      { name: "Django", highlight: false },
      { name: "PostgreSQL", highlight: false },
      { name: "Redis", highlight: false },
      { name: "Docker", highlight: false },
      { name: "AWS", highlight: false },
      { name: "GitHub Actions", highlight: false },
    ],
  },
  {
    category: "Visualization",
    items: [
      { name: "Matplotlib", highlight: false },
      { name: "Plotly", highlight: false },
      { name: "Grafana", highlight: false },
      { name: "Tableau", highlight: false },
      { name: "Observable", highlight: false },
    ],
  },
]

const Stack = () => {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="stack-intro">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">20년을 쌓아온 기술들</h2>
          <div className="section-divider" />
          <p className="section-desc">
            데이터 수집부터 분석, 시각화, 배포까지 — 전체 데이터 파이프라인을
            직접 설계하고 구현합니다.
          </p>
        </div>
        <div className="stack-categories">
          {stackData.map(cat => (
            <div key={cat.category}>
              <p className="stack-category-title">{cat.category}</p>
              <div className="stack-items">
                {cat.items.map(item => (
                  <span
                    key={item.name}
                    className={`stack-item${item.highlight ? " highlight" : ""}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
