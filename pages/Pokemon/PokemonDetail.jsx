import React from "react"
import { useLoaderData, Outlet } from "react-router-dom"

//api
import { getSinglePokemonWithId } from "../../api"

//loader function
export function loader({ params }) {
  return getSinglePokemonWithId(params.id)
}

export default function PokemonDetail() {
  const pokemon = useLoaderData()

  console.log(pokemon)

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </div>
  )
}

//pokemon.moves.map((move) => {
  //return (<p>{move.move.name}</p>)
//})

//pokemon.types (forEach or map) type.type.name
//weight: pokemon.weight

//maybe stats
