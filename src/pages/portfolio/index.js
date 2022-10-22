import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <Layout>
      <div className="about">
        <h2>Portfolio</h2>
        <h3>Projects & websites I've created</h3>

        <div className="projects">
          <Link to="/portfolio/reccenter">
            <h4>MERN App</h4>
          </Link>

          <h4>Flask App</h4>
          <h4>Gatsby Site</h4>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
