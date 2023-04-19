import React, { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

//api
import { getPokemonEvolution } from "../../api"


export default function PokemonEvolution() {
  const { pokemon } = useOutletContext()
  const [evolution, setEvolution] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await getPokemonEvolution(pokemon.id)
      setEvolution(response)
    }
    fetchData()
  }, [pokemon.id])

  console.log(pokemon)
  //issue: id is not the information we need for the correct evolution information
  //need to find the link between pokemon id and the api call for evolution

  return (
    evolution && <p>Current pokemon is {pokemon.name}. This is the evolution.</p>
  )
}
