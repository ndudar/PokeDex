import React from "react"
import { useLoaderData } from "react-router-dom"

//api
import { getSinglePokemonWithId } from "../../api"

//loader function
export function loader({ params }) {
  return getSinglePokemonWithId(params.id)
}

export default function PokemonDetail() {
  const pokemon = useLoaderData()

  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  )
}
