import React from "react";
import {
  useLoaderData,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

//api
import { getSinglePokemonWithId } from "../../api";

//loader function
export function loader({ params }) {
  return getSinglePokemonWithId(params.id);
}

export default function PokemonDetail() {
  const pokemon = useLoaderData();
  const location = useLocation();
  console.log(location);

  //grabbing filter info from location state
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="pokemon-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} pokemon</span>
      </Link>
      <div className="pokemon-detail">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} />
      </div>
      <nav className="pokemon-nav">
        <NavLink
          to="moves"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          state={{ search: search, type: type }}
        >
          Moves
        </NavLink>
        <NavLink
          to="stats"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          state={{ search: search, type: type }}
        >
          Stats
        </NavLink>
        <NavLink
          to="evolution"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          state={{ search: search, type: type }}
        >
          Evolution
        </NavLink>
      </nav>
      <Outlet context={{ pokemon }} />
    </div>
  );
}
