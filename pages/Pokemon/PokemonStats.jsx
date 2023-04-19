import React from "react"
import { useOutletContext } from "react-router-dom"

export default function PokemonStats() {
  const { pokemon } = useOutletContext()

  const types = pokemon.types.map((type) => {
    return type.type.name
  })

  const stats = pokemon.stats.map((stat) => {
    return (
      <div key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>
    )
  })

  return (
    <>
    <h3>Stats for {pokemon.name}:</h3>
    <p>Weight: {pokemon.weight}</p>
    <p>Types: {types.join(', ')}</p>
    {stats}
    </>
  )
}
