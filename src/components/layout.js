import React from "react"
import PropTypes from "prop-types"

// import "./layout.css"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
