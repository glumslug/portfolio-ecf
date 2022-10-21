import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <Layout>
      <div className="about">
        <h2>Portfolio</h2>
        <h3>Projects & websites I've created</h3>
        <div className="projects">
          <input type="radio" id="tabfree" name="projects" defaultChecked />
          <label for="tabfree">Free</label>
          <div className="tab">
            <h4>Free</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eum
              facilis similique quisquam sunt officia dolores assumenda
              consequatur placeat, maxime, quia ullam labore doloremque ratione?
              Obcaecati eius ad dolore eveniet.
            </p>
          </div>
          <input type="radio" id="tabsilver" name="projects" />
          <label for="tabsilver">Silver</label>
          <div className="tab">
            <h4>Silver</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              molestias esse cum aspernatur nam dicta reiciendis debitis quod
              quia delectus ipsam quae culpa maiores, saepe dolores consectetur
              id nostrum, expedita atque laboriosam. Animi, illo laudantium hic
              nihil doloribus quae asperiores quidem laboriosam esse minima
              cupiditate labore atque error vitae? Modi?
            </p>
          </div>
          <input type="radio" id="tabgold" name="projects" />
          <label for="tabgold">Gold</label>
          <div className="tab">
            <h4>Gold</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, at?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
