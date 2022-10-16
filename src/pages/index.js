import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in DC</p>
          <Link className="btn" to="/projects">
            My Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default About
