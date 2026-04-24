import React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/global.css"

const Layout = ({ children, title, description }) => {
  const siteTitle = title ? `${title} | Bjorn Lab` : "Bjorn Lab"
  const siteDesc =
    description ||
    "지속 가능한 미래를 위해 세상의 모든 데이터를 분석하고 예측, 설계하는 소프트웨어 개발 스튜디오"

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bjornlab.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Inter:wght@300;400;600;700;800&family=Noto+Sans+KR:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
