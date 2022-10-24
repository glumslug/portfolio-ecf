import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

const GatsbySite = () => {
  return (
    <Layout>
      <div className="portfolio">
        <div className="title-card">
          <Link to="/portfolio">
            <img src="/circle-left-regular.svg" alt="" />
          </Link>
          <h3>Gatsby Personal Site </h3>
        </div>

        <div className="project">
          <input type="radio" id="tab1" name="project" defaultChecked />
          <label for="tab1">Site</label>
          <div className="tab">
            <p>Personal portfolio site built using Gatsby. </p>
            <p>
              A simple site to display my website development work, socials, and
              personal information.
            </p>
          </div>
          <input type="radio" id="tab2" name="project" />
          <label for="tab2">Stack</label>
          <div className="tab">
            <p>Gatsby app using ReactJS and SASS.</p>
          </div>
          <input type="radio" id="tab3" name="project" />
          <label for="tab3">Story</label>
          <div className="tab">
            <p>
              This app was relatively straightforward in terms of functionality,
              so I focused on stylizing instead.
            </p>
            <p>
              While I had worked with SASS and CSS on my other projects, this
              was a chance for me to take a deep dive and try things I had
              previously deprioritized such as CSS-only tabs and animations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GatsbySite
