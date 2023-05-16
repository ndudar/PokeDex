import React, { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

//api
import { getPokemonEvolution, getPokemonSpecies } from "../../api"


export default function PokemonEvolution() {
  const { pokemon } = useOutletContext()
  const speciesUrl = pokemon.species.url
  const [species, setSpecies] = useState(null)
  const [evolution, setEvolution] = useState(null)


  //first useEffect is making the first step in a domino of API calls
  useEffect(() => {
    async function fetchData() {
      const response = await getPokemonSpecies(speciesUrl)
      setSpecies(response)
    }
    fetchData()
  }, [speciesUrl])

  //once we have the species info, we can have the second useEffect call evolution info
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

  //recursive func to gather evolution api data:
  const evoChainFunc = (evoChain, array = []) => {
    if (!evoChain.evolves_to.length) array.push(evoChain.species.name)
    else {
      array.push(evoChain.species.name)
      evoChainFunc(evoChain.evolves_to[0], array)
    }
    return array
  }

  //rendering the visual of the evolution chain
  const displayEvolution = (evoArray) => {
    return evoArray.map((poke) => {
      return (
        <p key={poke}>{poke}</p>
      )
    })
  }

  return (
    <div className="pokemon-extra-details-container">
    {species && <p>pokemon is {pokemon.name}. This is the evolution chain:</p>}
    {evolution && <div>{displayEvolution(evoChainFunc(evolution.chain))}</div>}
    </div>
  )
}
