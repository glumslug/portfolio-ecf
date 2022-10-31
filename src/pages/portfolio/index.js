import React, { useState } from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import recdemo from "../../images/demo9s.gif"
import paddemo from "../../images/notepaddemo1.gif"
import gatsdemo from "../../images/site-preview.png"
import react from "../../images/react.png"
import node from "../../images/node.png"
import mongo from "../../images/mongo.png"
import socket from "../../images/socketio.svg"
import s3 from "../../images/s3.png"
import css from "../../images/css.png"
import sass from "../../images/sass.png"
import html from "../../images/html.png"
import js from "../../images/js.png"
import gatsby from "../../images/gatsby.svg"
import python from "../../images/python.png"

const Projects = () => {
  const [modal, setModal] = useState("")
  const [view, setView] = useState("preview")
  const cta = (
    <a className="cta" href="https://reccenter.herokuapp.com/" target="_blank">
      Check out the app
    </a>
  )

  const viewButton = () => {
    return (
      <div className="btn" onClick={() => setView("details")}>
        Details
      </div>
    )
  }
  return (
    <Layout>
      <div className="portfolio-home">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
          <h3>Projects & websites I've created</h3>
        </div>
        <div className="projects">
          {/* Rec center mern app */}
          <Link to="/portfolio/mernapp" className="project-card">
            <div className="title-card">
              <h4>React Basketball App</h4>
            </div>
            <img src={recdemo} id="recc" alt="" />
            <ul>
              <li>
                <img src={react} alt="" />
              </li>
              <li>
                <img src={node} alt="" />
              </li>
              <li>
                <img src={mongo} alt="" />
              </li>
              <li>
                <img src={socket} alt="" />
              </li>
              <li>
                <img src={s3} alt="" />
              </li>
              <li>
                <img src={sass} alt="" />
              </li>
            </ul>
          </Link>

          {/* Flask App */}
          <Link to="/portfolio/flaskapp" className="project-card">
            <div className="title-card">
              <h4>Flask Notepad App</h4>
            </div>
            <img src={paddemo} id="note" alt="" />
            <ul>
              <li>
                <img src={html} alt="" />
              </li>
              <li>
                <img src={css} alt="" />
              </li>
              <li>
                <img src={js} alt="" />
              </li>
              <li>
                <img src={python} alt="" />
              </li>
            </ul>
          </Link>

          {/* Gatsby Site */}
          <Link to="/portfolio/gatsbyapp" className="project-card">
            <div className="title-card">
              <h4>Gatsby Portfolio Site</h4>
            </div>
            <img src={gatsdemo} id="gats" alt="" />
            <ul>
              <li>
                <img src={gatsby} alt="" />
              </li>
              <li>
                <img src={react} alt="" />
              </li>
              <li>
                <img src={sass} alt="" />
              </li>
            </ul>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
