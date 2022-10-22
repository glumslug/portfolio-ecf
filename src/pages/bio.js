import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <div className="about">
        <h1>Bio</h1>

        <h2>Full-stack web developer</h2>

        {/* <h3>Skills</h3> */}
        <ul>
          <li>ReactJS</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>NodeJS</li>
          <li>socket.io</li>
          <li>Amazon S3</li>
        </ul>

        {/* <h3>Socials</h3> */}
        <div className="socials">
          <Link className="btn" to="/projects">
            Resume
          </Link>
          <img src="/github.svg" alt="" />
          <img src="/linkedin.svg" alt="" />
        </div>
      </div>
    </Layout>
  )
}
