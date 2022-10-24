import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <div className="bio">
        <div className="title-card">
          {" "}
          <h1>Bio</h1>
          {/* <img src="/headshot2.png" alt="" /> */}
        </div>
        <p>
          I am a self-taught full stack developer, and I enjoy making useful
          websites.
        </p>
        <h3>Technologies</h3>

        <ul>
          <li>ReactJS</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>NodeJS</li>
          <li>socket.io</li>
          <li>Amazon S3</li>
          <li>Flask</li>
          <li>Gatsby</li>
          <li>React Native</li>
        </ul>

        {/* <h3>Other Skills</h3>

        <ul>
          <li>Writing</li>
          <li>Editing</li>
          <li>Japanese</li>
        </ul> */}

        <div className="socials">
          <Link className="btn" to="/portfolio">
            Portfolio
          </Link>
          <Link className="btn" to="/resume">
            Resume
          </Link>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eli-ferster-5a7238141/"
          >
            <img src="/linkedin.svg" alt="" />
          </a>
          <a href="https://github.com/glumslug" target="_blank">
            <img src="/github.svg" alt="" />
          </a>
        </div>
        <h4 className="email">eli.c.ferster@gmail.com</h4>
      </div>
    </Layout>
  )
}
