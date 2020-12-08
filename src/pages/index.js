import React from "react"
// import { Link } from "gatsby"
import HeroSection from "../components/HeroSection"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage
