import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Shelvess from "../components/Shelves"
import { shelvesData } from "../components/Shelves/shelvesData"
import "../../src/components/layout.css"

const Shelves = () => (
  <Layout>
    <SEO title="Shelves" />
    <Shelvess heading="View Shelves" data={shelvesData} />
  </Layout>
)

export default Shelves
