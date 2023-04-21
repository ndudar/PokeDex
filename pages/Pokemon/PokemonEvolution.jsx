import React, { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

//api
import { getPokemonEvolution } from "../../api"


export default function PokemonEvolution() {
  const { pokemon } = useOutletContext()
  //const [evolution, setEvolution] = useState(null)

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getPokemonEvolution(url)
  //     setEvolution(response)
  //   }
  //   fetchData()
  // }, [pokemon.id])

  //issue: id is not the information we need for the correct evolution information
  //need to find the link between pokemon id and the api call for evolution

  return (
    <p>Current pokemon is {pokemon.name}. This is the evolution.</p>
  )
}
