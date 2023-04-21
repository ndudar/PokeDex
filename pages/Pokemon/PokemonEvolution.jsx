import React, { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

//api
import { getPokemonEvolution, getPokemonSpecies } from "../../api"


export default function PokemonEvolution() {
  const { pokemon } = useOutletContext()
  const speciesUrl = pokemon.species.url
  const [species, setSpecies] = useState(null)
  const [evolution, setEvolution] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await getPokemonSpecies(speciesUrl)
      setSpecies(response)
    }
    fetchData()
  }, [speciesUrl])

  useEffect(() => {
    async function fetchData() {
      if (species) {
        const evolutionUrl = species.evolution_chain.url
        const response = await getPokemonEvolution(evolutionUrl)
        setEvolution(response)
      }
    }
    fetchData()
  }, [species])

  //issue: id is not the information we need for the correct evolution information
  //need to find the link between pokemon id and the api call for evolution

  return (
    <>
    {species && <p>pokemon is {pokemon.name}</p>}
    {evolution && console.log(evolution.chain)}
    </>
  )
}
