import React from "react"
import Layout from "../../components/Layout"

const Reccenter = () => {
  return (
    <Layout>
      <div className="about">
        <h2>Portfolio</h2>
        <h3>Rec Center MERN App</h3>
        <div className="projects">
          <input type="radio" id="tab1" name="projects" defaultChecked />
          <label for="tab1">Site</label>
          <div className="tab">
            <h4>Overview</h4>
            <p>
              REC CENTER is a social-networking app for coordinating schedules
              with friends for basketball.{" "}
            </p>
            <p>
              It has a user system with password authentication and protected
              access to information and functionality. The app allows you to
              create a schedule of availability, and then automatically
              aggregates your availability with your friends' availability for
              each group you join.
            </p>
          </div>
          <input type="radio" id="tab2" name="projects" />
          <label for="tab2">Stack</label>
          <div className="tab">
            <h4>Stack</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              molestias esse cum aspernatur nam dicta reiciendis debitis quod
              quia delectus ipsam quae culpa maiores, saepe dolores consectetur
              id nostrum, expedita atque laboriosam. Animi, illo laudantium hic
              nihil doloribus quae asperiores quidem laboriosam esse minima
              cupiditate labore atque error vitae? Modi?
            </p>
          </div>
          <input type="radio" id="tab3" name="projects" />
          <label for="tab3">Story</label>
          <div className="tab">
            <h4>Story</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, at?
            </p>
          </div>
        </div>
        <div className="cta">
          <div className="call">
            <h4>
              {" "}
              Check out the app{" "}
              <a target="_blank" href="https://reccenter.herokuapp.com/">
                here
              </a>
            </h4>
          </div>
          <div className="instructions">
            <div className="contents">
              {" "}
              <h4>Use login credentials:</h4>
              <p>Email: fake@fake.fake</p>
              <p>Password: janedoe</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Reccenter
