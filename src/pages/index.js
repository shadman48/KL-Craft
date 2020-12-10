import React from "react"
// import { Link } from "gatsby"
import HeroSection from "../components/HeroSection"

import Layout from "../components/layout"
import Image from "../components/Bundles"
import SEO from "../components/seo"
import { bundleData } from "../components/Bundles/bundleData"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Image heading="View Bundles" data={bundleData} />
  </Layout>
)

export default IndexPage
