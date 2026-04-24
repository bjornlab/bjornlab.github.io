import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Stack from "../components/Stack"
import Work from "../components/Work"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Stack />
      <Work />
      <Contact />
    </Layout>
  )
}

export default IndexPage
