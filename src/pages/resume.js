import React from "react"
import Layout from "../components/Layout"
import download from "../images/download-file.svg"

const Resume = () => {
  return (
    <Layout>
      <div className="resume">
        <div className="resume-title">
          <h2>Resume</h2>
          <a href="/eliferster-resume-2022.pdf" target="_blank">
            <img src={download} alt="" />
          </a>
        </div>
        <div className="resume-block">
          <div className="title-card">
            <h4>EDUCATION</h4>
          </div>

          <p>BA, Creative Writing - Oberlin College, 2017</p>
        </div>
        <div className="resume-block">
          <div className="title-card">
            <h4>SKILLS</h4>
          </div>
          <table>
            <tr>
              <th>Web:</th>
              <td>
                ReactJS, Express, MongoDB, NodeJS, socket.io, Amazon S3, Flask,
                Gatsby, React Native, HTML, CSS, JavaScript
              </td>
            </tr>
            <tr>
              <th>Writing:</th>
              <td>
                Copywriting, proposal writing, technical writing, translation
                (Japanese-English){" "}
              </td>
            </tr>
            <tr>
              <th>Editing:</th>
              <td>Copyediting, formatting, graphics manipulation</td>
            </tr>
            <tr>
              <th> Misc.:</th>
              <td>
                SharePoint archive management, process improvement, Japanese
                (JLPT N2 certified), government contracting
              </td>
            </tr>
          </table>
        </div>
        <div className="resume-block">
          <div className="title-card">
            <h4>Astor & Sanders Corporation, Rockville, MD, USA </h4>
            <h4>Jul. 2021 - Present</h4>
          </div>
          <h4 className="role">Role: Writer/Editor </h4>

          <ul>
            <li>
              Support proposal team in bidding for IT contracts by writing,
              editing, and managing contract bid proposals.
            </li>
            <li>
              Manage and edit corporate capabilities and technical/management
              approach materials, ensuring both compliance with client
              specifications and strongest possible corporate representation.{" "}
            </li>
            <li>
              Manage proposal-related procedures, inter/intra-organization
              communications and coordination, contract employee onboarding
              assistance, and document archival and organization.
            </li>
            <li>
              Assist in business development tracking and management functions,
              as well as corporate marketing activities.
            </li>
          </ul>
        </div>
        <div className="resume-block">
          <div className="title-card">
            <h4>AJET Connect Magazine, Remote, Japan </h4>
            <h4>Oct. 2019 – Jul. 2020</h4>
          </div>
          <h4 className="role">Role: General Section Editor (volunteer) </h4>

          <ul>
            <li>
              Sourced, edited, and managed submissions for all sections of the
              magazine.
            </li>
            <li>
              Supported other editors to ensure they met deadlines and quotas.
            </li>
          </ul>
        </div>
        <div className="resume-block">
          <div className="title-card">
            <h4>Japanese Exchange and Teaching (JET) Program, Kyoto, Japan</h4>
            <h4>Sept. 2018 – Sept. 2020</h4>
          </div>
          <h4 className="role">Role: Assistant Language Teacher </h4>

          <ul>
            <li>
              Developed teaching materials and led classroom instruction for
              Elementary and Middle school English lessons, as well as adult
              English classes.
            </li>
            <li>
              Facilitated cultural communication activities engaging teachers,
              students, and external organizations.
            </li>
          </ul>
        </div>
        <div className="resume-block">
          <div className="title-card">
            <h4>Thinktown Education Inc., Remote, USA</h4>
            <h4>Jul. 2017 – Jul. 2018</h4>
          </div>
          <h4 className="role">Role: Writing Specialist </h4>

          <ul>
            <li>
              Edited college application materials, interfaced with writers, and
              managed application requirements/deadlines.
            </li>
            <li>
              Provided educational guidance to students on writing and editing
              best practices.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Resume
