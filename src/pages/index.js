import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import email from "../images/mail.png"
import { SEO } from "../components/seo"

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        {/* <img src="headshot2.png" alt="" /> */}
        <h2>Eli Ferster</h2>
        <h1>Full-Stack Developer</h1>
        <div className="socials">
          <div className="internals">
            <Link className="btn" to="/bio">
              Bio
            </Link>
            <Link className="btn" to="/resume">
              Resume
            </Link>
            <Link className="btn" to="/portfolio">
              Portfolio
            </Link>
          </div>
          <div className="externals">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eli-ferster-5a7238141/"
            >
              <img src={linkedin} alt="" />
            </a>
            <a href="https://github.com/glumslug" target="_blank">
              <img src={github} alt="" />
            </a>
            <a href="mailto:eli.c.ferster@gmail.com" target="_blank">
              <img src={email} alt="" id="email" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

export const Head = () => <SEO />
