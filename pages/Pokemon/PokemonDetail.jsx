import React from "react"
import { useLoaderData, Outlet, NavLink } from "react-router-dom"

//api
import { getSinglePokemonWithId } from "../../api"

//loader function
export function loader({ params }) {
  return getSinglePokemonWithId(params.id)
}

export default function PokemonDetail() {
  const pokemon = useLoaderData()

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  return (
    <div className="pokemon-detail-container">
    <div className="pokemon-detail">
      <h1 className="pokemon-detail-name">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </div>
    <nav className="pokemon-nav">
      <NavLink to="moves" style={({ isActive }) => isActive ? activeStyles : null} >Moves</NavLink>
      <NavLink to="stats" style={({ isActive }) => isActive ? activeStyles : null} >Stats</NavLink>
      <NavLink to="evolution" style={({ isActive }) => isActive ? activeStyles : null} >Evolution</NavLink>
    </nav>
    <Outlet context={{ pokemon }} />
    </div>
  )
}
