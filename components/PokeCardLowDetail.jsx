import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//api
import { getSinglePokemon } from "../api"

export default function PokeCardLowDetail(props) {
  const url = props.pokemon.url
  const [poke, setPoke] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await getSinglePokemon(url)
      setPoke(response)
    }
    fetchData()
  }, [url])

  return (
    poke &&
    <Link to={`/pokemon/${poke.id}`}>
    <div>
      <img src={poke.sprites.front_default}/>
      <h3>{poke.name}</h3>
    </div>
    </Link>
  )
}
