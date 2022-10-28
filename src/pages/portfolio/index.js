import React, { useState } from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import recdemo from "../../images/demo9s.gif"
import paddemo from "../../images/notepaddemo1.gif"
import gatsdemo from "../../images/site-preview.png"

const Projects = () => {
  const [modal, setModal] = useState("")
  return (
    <Layout>
      <div className="portfolio-home">
        <h2>Portfolio</h2>
        <h3>Projects & websites I've created</h3>

        <div className="projects">
          <div className="proj" onClick={() => setModal("mern")}>
            <h4>Basketball App</h4>
          </div>
          <div className="proj" onClick={() => setModal("flask")}>
            <h4>Notepad App</h4>
          </div>
          <div className="proj" onClick={() => setModal("gatsby")}>
            <h4>Personal Site</h4>
          </div>
          {modal === "mern" && (
            <div className="modal" onClick={() => setModal("")}>
              <Link to="/portfolio/mernapp">
                <h4>Basketball App</h4>
                <div className="contents">
                  <ul>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>socket.io</li>
                    <li>Amazon S3</li>
                  </ul>
                  <img src={recdemo} alt="" />
                </div>
              </Link>
            </div>
          )}
          {modal === "flask" && (
            <div className="modal" onClick={() => setModal("")}>
              <Link to="/portfolio/flaskapp">
                <h4>Notepad App</h4>
                <div className="contents">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python Flask</li>
                  </ul>
                  <img src={paddemo} alt="" />
                </div>
              </Link>
            </div>
          )}
          {modal === "gatsby" && (
            <div className="modal" onClick={() => setModal("")}>
              <Link to="/portfolio/gatsbyapp">
                <h4>Personal Site</h4>
                <div className="contents">
                  <ul>
                    <li>Gatsby</li>
                    <li>SASS</li>
                    <li>React</li>
                  </ul>
                  <img src={gatsdemo} alt="" />
                </div>
              </Link>
            </div>
          )}

          {/* 
          <Link to="/portfolio/flaskapp">
            <h4>Flask App</h4>
          </Link>{" "}
          <Link to="/portfolio/gatsbyapp">
            <h4>Gatsby Site</h4>
          </Link> */}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
