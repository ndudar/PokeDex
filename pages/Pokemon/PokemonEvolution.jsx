import React from "react"
import { useOutletContext } from "react-router-dom"

export default function PokemonEvolution() {
  const { pokemon } = useOutletContext()
  return (
    <p>Current pokemon is {pokemon.name}. This is the evolution.</p>
  )
}
