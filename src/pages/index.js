import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        {/* <img src="headshot2.png" alt="" /> */}
        <h2>Eli Ferster</h2>
        <h1>Full-Stack Developer</h1>
        <div className="socials">
          <Link className="btn" to="/portfolio">
            Portfolio
          </Link>
          <Link className="btn" to="/bio">
            Bio
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Home
