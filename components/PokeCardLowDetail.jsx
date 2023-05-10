import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//api
import { getSinglePokemon } from "../api"

export default function PokeCardLowDetail(props) {
  const url = props.pokemon.url
  const typeFilter = props.typeFilter
  const [poke, setPoke] = useState(null)

  console.log("typeFilter:", typeFilter)

  //since we don't have access to the poke id, we make the api call with the url
  useEffect(() => {
    async function fetchData() {
      const response = await getSinglePokemon(url)
      setPoke(response)
    }
    fetchData()
  }, [url])

  let typeMatch = false
  if (!typeFilter) typeMatch = true
  if (poke) {
    poke.types.forEach((typeObj) => {
      if (typeObj.type.name === typeFilter) typeMatch = true
    })
  }

  return (
    poke && typeMatch ?
    <Link to={`/pokemon/${poke.id}`} state={props.state}>
    <div className="pokemon-tile">
      <img src={poke.sprites.front_default}/>
      <div>
       <h3>{poke.name}</h3>
      </div>
    </div>
    </Link> : null
  )
}
