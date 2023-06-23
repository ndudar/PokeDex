import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <Link to={'/randomize'} >
      <div className="pokeball-container">
        <div className="pokeball"></div>
      </div>
      </Link>
    </div>
  )
}
