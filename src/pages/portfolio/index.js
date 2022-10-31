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

          {/* Rec center mern app */}
          {modal === "mern" && (
            <div className="modal">
              <div className="modal-bkg" onClick={() => setModal("")}></div>
              <div className="project-modal">
                <div className="title-card">
                  <h4>React Basketball App</h4>

                  {viewButton()}
                </div>

                {view === "preview" && (
                  <div className="preview">
                    <img src={recdemo} id="recc" alt="" />
                  </div>
                )}
                {view === "details" && (
                  <div className="details">
                    <div className="project">
                      <input
                        type="radio"
                        id="tab1"
                        name="project"
                        defaultChecked
                      />
                      <label for="tab1">Site</label>
                      <div className="tab">
                        <p>
                          Rec Center is a social-scheduling app for pick-up
                          basketball.{" "}
                        </p>
                        <p>
                          It gives you a personal schedule, where you select
                          which days you're available.
                        </p>
                        <p>
                          Then join a group, and the site automatically
                          aggregates your availability with your friends'
                          availability for easy scheduling!
                        </p>

                        {cta}
                      </div>
                      <input type="radio" id="tab2" name="project" />
                      <label for="tab2">Stack</label>
                      <div className="tab">
                        <p>
                          The site is built on the MERN stack with ReactJS
                          frontend, Node and Express backend, and mongoDB
                          database.
                        </p>
                        <p>
                          The user system has password authentication and
                          protected routes for frontend & API.{" "}
                        </p>
                        <p>
                          I used socket.io for instant notifications and Amazon
                          S3 for file storage. Hosted on heroku.
                        </p>
                        {cta}
                      </div>
                      <input type="radio" id="tab3" name="project" />
                      <label for="tab3">Story</label>
                      <div className="tab">
                        <p>
                          I began development on the app in June of 2022,
                          working on the app after-work and on weekends.
                        </p>
                        <p>
                          The development went slowly at first, then sped up as
                          I got more familiar with React.
                        </p>
                        <p>
                          I published the app in October 2022 for my friends to
                          test out, then made adjustments based on their
                          feedback.
                        </p>
                        {cta}
                      </div>
                    </div>
                  </div>
                )}
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
              </div>
            </div>
          )}

          {/* Flask App */}
          {modal === "flask" && (
            <div className="modal">
              <div className="modal-bkg" onClick={() => setModal("")}></div>
              <Link className="project-modal" to="/portfolio/flaskapp">
                <h4>Flask Notepad App</h4>
                <div className="preview">
                  <img src={paddemo} id="note" alt="" />
                </div>
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
            </div>
          )}
          {modal === "gatsby" && (
            <div className="modal" onClick={() => setModal("")}>
              <Link to="/portfolio/gatsbyapp">
                <h4>Gatsby Personal Site</h4>
                <div className="contents">
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
