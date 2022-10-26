import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useEffect } from "react"

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const handleResize = () => {
    if (window.innerWidth > 599) {
      document.getElementById("toggle").checked = false
    }
  }

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
          <Link to="/bio">Bio</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
