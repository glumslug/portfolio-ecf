import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <Layout>
      <div className="portfolio-home">
        <h2>Portfolio</h2>
        <h3>Projects & websites I've created</h3>

        <div className="projects">
          <Link to="/portfolio/mernapp">
            <h4>MERN App</h4>
          </Link>
          <Link to="/portfolio/flaskapp">
            <h4>Flask App</h4>
          </Link>{" "}
          <Link to="/portfolio/gatsbyapp">
            <h4>Gatsby Site</h4>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
