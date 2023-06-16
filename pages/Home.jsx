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


//random pokemon generator you can click...
//maybe that links to their individual page?
//then a random poke card is pulled up
