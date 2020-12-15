import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Custom1 from "../components/Custom"
import { customData } from "../components/Custom/customData"
import "../../src/components/layout.css"

const Custom = () => (
  <Layout>
    <SEO title="Custom" />
    <Custom1 heading="Custom Requests" data={customData} />
  </Layout>
)

export default Custom
