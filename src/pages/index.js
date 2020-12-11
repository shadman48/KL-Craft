import React from "react"
// import { Link } from "gatsby"
import HeroSection from "../components/HeroSection"

import Layout from "../components/layout"
import Bundle from "../components/Bundles"
import SEO from "../components/seo"
import { bundleData } from "../components/Bundles/bundleData"
import "../../src/components/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Bundle heading="View Bundles" data={bundleData} />
  </Layout>
)

export default IndexPage
