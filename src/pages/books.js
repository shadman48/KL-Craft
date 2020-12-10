import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Books from "../components/Books"
import { bookData } from "../components/Books/bookData"
import "../../src/components/layout.css"

const Book = () => (
  <Layout>
    <SEO title="Book" />
    <Books heading="View Books" data={bookData} />
  </Layout>
)

export default Book
