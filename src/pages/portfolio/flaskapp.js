import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import back from "../../images/circle-left-regular.svg"

const FlaskApp = () => {
  const cta = (
    <a
      className="cta"
      href="https://glumslug.pythonanywhere.com/"
      target="_blank"
    >
      Check out the app
    </a>
  )
  return (
    <Layout>
      <div className="portfolio">
        <div className="title-card">
          <Link to="/portfolio">
            <img src={back} alt="" />
          </Link>
          <h3>Flask Notepad App </h3>
        </div>
        <div className="project">
          <input type="radio" id="tab1" name="project" defaultChecked />
          <label for="tab1">Site</label>
          <div className="tab">
            <p>
              This is a notepad app that allows you to add categories to notes
              and sort by category.
            </p>
            <p>
              Notes are localized to user accounts, and are editable and
              deletable.
            </p>

            {cta}
          </div>
          <input type="radio" id="tab2" name="project" />
          <label for="tab2">Stack</label>
          <div className="tab">
            <p>
              This is a Python Flask application using Python Flask and
              SQLAlchemy for the backend and vanilla HTML, CSS, and JavaScript
              for the frontend.
            </p>
            {cta}
          </div>
          <input type="radio" id="tab3" name="project" />
          <label for="tab3">Story</label>
          <div className="tab">
            <p>
              I followed two tutorials to create the basic notepad
              functionality. I then modified this base to add the category
              functionality.
            </p>
            <p>
              This was the first major application I created, and the
              functionality and design are consequently very basic.
            </p>
            <p>
              This was a major learning experience for me, and laid the
              foundation for me to start learning high level frameworks and
              tackling more complex projects.
            </p>
            {cta}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FlaskApp
