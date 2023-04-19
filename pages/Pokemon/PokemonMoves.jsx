import React from "react"
import { useOutletContext } from "react-router-dom"

export default function PokemonMoves() {
  const { pokemon } = useOutletContext()

  const moves = pokemon.moves.map((move) => {
    return (
      <p>{move.move.name}</p>
    )
  })
  
  return (
    <>
    <p>{pokemon.name} has {moves.length} moves:</p>
    <div>{moves}</div>
    </>
  )
}
