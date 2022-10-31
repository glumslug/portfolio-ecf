import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <Layout>
      <div className="portfolio-home">
        <h1>Portfolio</h1>
        <h3>Projects & websites I've created</h3>

        <div className="projects">
          <Link to="/portfolio/reactapp">
            <h4>React App</h4>
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
