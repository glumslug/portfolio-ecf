import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

const Reccenter = () => {
  return (
    <Layout>
      <div className="about">
        <Link to="/portfolio">
          <h2>Portfolio</h2>
        </Link>

        <h3>Rec Center MERN App</h3>
        <div className="project">
          <input type="radio" id="tab1" name="project" defaultChecked />
          <label for="tab1">Site</label>
          <div className="tab">
            <p>
              Rec Center is a social-scheduling app for pick-up basketball.{" "}
            </p>
            <p>
              The app allows you to create a schedule of availability, and then
              automatically aggregates your availability with your friends'
              availability for each group you join.
            </p>
          </div>
          <input type="radio" id="tab2" name="project" />
          <label for="tab2">Stack</label>
          <div className="tab">
            <p>
              MERN stack with ReactJS frontend, Node and Express backend, and
              mongoDB database. User system has password authentication and
              protected routes for frontend & API.{" "}
            </p>
            <p>
              Features socket.io for instant notifications, Amazon S3 for file
              storage, and nodemailer for password reset. Hosted on heroku.
            </p>
          </div>
          <input type="radio" id="tab3" name="project" />
          <label for="tab3">Story</label>
          <div className="tab">
            <p>
              I began development on the app in June of 2022, working on the app
              after-work and on weekends.
            </p>
            <p>
              The development went slowly at first, then sped up as I got more
              familiar with React.
            </p>
            <p>
              I published the app in October 2022 for my friends to test out,
              then made adjustments based on their feedback.
            </p>
          </div>
        </div>
        <div className="cta">
          <div className="call">
            <a target="_blank" href="https://reccenter.herokuapp.com/">
              <h4>
                Check out the <span>app</span>
              </h4>
            </a>
          </div>
          {/* <div className="instructions">
            <div className="contents">
              {" "}
              <h4>Use login credentials:</h4>
              <p>Email: fake@fake.fake</p>
              <p>Password: janedoe</p>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default Reccenter
