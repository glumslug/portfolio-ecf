import React from "react"
import Navbar from "./Navbar"
import "../styles/styles.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>&copy; Copyright 2022 Eli Ferster</p>
      </footer>
    </div>
  )
}

export default Layout
