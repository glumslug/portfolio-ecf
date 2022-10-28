import React from "react"
import { Link } from "gatsby"

const ProjectModal = ({ title, list, image }) => {
  console.log(title)
  const ulContent = () => {
    const items = []
    list.map(item => {
      items.push(<li>{item}</li>)
    })
    return items
  }
  return (
    <Link to="/portfolio/mernapp">
      <h4>{title}</h4>
      <div className="contents">
        <ul>{ulContent}</ul>
        <img src={image} alt="" />
      </div>
    </Link>
  )
}

export default ProjectModal
