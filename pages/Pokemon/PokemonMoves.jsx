import React from "react"
import { useOutletContext } from "react-router-dom"

export default function PokemonMoves() {
  const { pokemon } = useOutletContext()

  const moves = pokemon.moves.map((move) => {
    return (
      <p key={move.move.name}>{move.move.name}</p>
    )
  })

  return (
    <div className="pokemon-extra-details-container">
    <p>{pokemon.name} has {moves.length} moves:</p>
    <div>{moves}</div>
    </div>
  )
}
