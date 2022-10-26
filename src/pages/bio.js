import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

export default function About() {
  return (
    <Layout>
      <div className="bio">
        <div className="bio-grid">
          <div className="left">
            <h1>Bio</h1>
            <div className="left-sub">
              {" "}
              <p>
                Hello, my name is Eli and I am a self-taught full-stack
                developer. I started programming making games on scratch, then
                decided to try web development, and loved it.
              </p>
              <p>
                I love making useful sites that solve problems for people. It
                constantly amazes me how empowering the web can be. I love
                creating functionality and imagining how my users might interact
                with it.
              </p>
            </div>
          </div>
          <div className="right">
            <h1 id="stack">Stack</h1>
            <div className="right-sub">
              <p>Technologies I've used in my projects:</p>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
