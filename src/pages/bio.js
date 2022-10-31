import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import react from "../images/react.png"
import node from "../images/node.png"
import mongo from "../images/mongo.png"
import socket from "../images/socketio.svg"
import s3 from "../images/s3.png"
import css from "../images/css.png"
import sass from "../images/sass.png"
import html from "../images/html.png"
import js from "../images/js.png"
import gatsby from "../images/gatsby.svg"
import python from "../images/python.png"

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
              {/* <ul>
                <li>ReactJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>NodeJS</li>
                <li>socket.io</li>
                <li>Amazon S3</li>
                <li>Flask</li>
                <li>Gatsby</li>
                <li>React Native</li>
              </ul> */}
              <ul>
                <li>
                  <img src={react} alt="" />
                </li>
                <li>
                  <img src={node} alt="" />
                </li>
                <li>
                  <img src={mongo} style={{ paddingLeft: "12px" }} alt="" />
                </li>
                <li>
                  <img src={socket} alt="" />
                </li>
                <li>
                  <img src={s3} style={{ padding: "0 4px" }} alt="" />
                </li>
                <li>
                  <img src={sass} alt="" />
                </li>
                <li>
                  <img
                    src={gatsby}
                    style={{ height: "2.6rem", padding: "2px 3px" }}
                    alt=""
                  />
                </li>
                <li>
                  <img src={python} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
