import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        <h2>Eli Ferster</h2>
        <h1>Full-Stack Developer</h1>
        <h3>ReactJS MERN stack experienced.</h3>
        <div className="socials">
          <Link className="btn" to="/projects">
            Resume
          </Link>
          <Link className="btn" to="/projects">
            Projects
          </Link>
          <img src="/github.svg" alt="" />
          <img src="/linkedin.svg" alt="" />
        </div>
        {/* </div> */}
      </section>
    </Layout>
  )
}

export default Home
