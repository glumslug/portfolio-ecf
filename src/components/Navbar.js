import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="site-title" to="/">
          Eli Ferster
        </Link>
        <input type="checkbox" id="toggle" />
        <label className="toggle-button" for="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
