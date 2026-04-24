# Bjorn Lab — bjornlab.github.io

비욘랩(Bjorn Lab)의 공식 스튜디오 사이트입니다.  
지속 가능한 미래를 위한 소프트웨어 개발 & 데이터 분석 1인 창업 스튜디오.

🌐 **https://bjornlab.github.io**

---

## 기술 스택

- **Gatsby** (React 기반 정적 사이트 생성)
- **GitHub Pages** (배포)
- **GitHub Actions** (CI/CD)
- 단일 페이지, 순수 CSS (외부 CSS 프레임워크 없음)

## 로컬 개발

```bash
npm install
npm run develop   # http://localhost:8000
```

## 빌드 & 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드하고 GitHub Pages에 배포합니다.

```bash
npm run build    # public/ 디렉토리에 빌드 결과물 생성
```

## 사이트 구성

| 섹션 | 내용 |
|------|------|
| **Hero** | 브랜드 아이덴티티, CTA |
| **About** | 스튜디오 소개, 핵심 가치, 경력 통계 |
| **Stack** | 기술 스택 (Languages, Frontend, Data & AI, Backend, Visualization) |
| **Work** | 주요 프로젝트 포트폴리오 |
| **Contact** | 연락처 정보 |