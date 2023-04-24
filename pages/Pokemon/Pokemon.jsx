import React from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

//components
import PokeCardLowDetail from "../../components/PokeCardLowDetail";

//api
import { getPokemon } from "../../api";

//grabs all the pokemon
export function loader() {
  return defer({ pokemons: getPokemon() });
}

export default function Pokemon() {
  const dataPromise = useLoaderData();

  function renderPokemonElements(pokemons) {
    const displayedPokemons = pokemons.results;

    const pokemonsElements = displayedPokemons.map((pokemon) => (
      <PokeCardLowDetail pokemon={pokemon} key={pokemon.name}/>
    ))

    return (
      <div>{pokemonsElements}</div>
    )
  }

  return (
    <div className="pokemon-list-container">
      <h1>Checkout the Pokemon!</h1>
      <React.Suspense fallback={<h2>Loading Pokemon...</h2>}>
        <Await resolve={dataPromise.pokemons}>{renderPokemonElements}</Await>
      </React.Suspense>
    </div>
  );
}
