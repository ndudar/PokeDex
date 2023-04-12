import React from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

//api
import { getPokemon } from "../../api";

export function loader() {
  return defer({ pokemons: getPokemon() });
}

export default function Pokemon() {
  const dataPromise = useLoaderData();

  function renderPokemonElements(pokemons) {
    const displayedPokemons = pokemons;
    console.log(pokemons)

    const pokemonsElements = displayedPokemons.map((pokemon) => (
      <div key={pokemon.name}>
        <h3>{pokemon.name}</h3>
      </div>
    ))

    return (
      <div>{pokemonsElements}</div>
    )
  }

  return (
    <div>
      <h1>Checkout the Pokemon!</h1>
      <React.Suspense fallback={<h2>Loading Pokemon...</h2>}>
        <Await resolve={dataPromise.pokemons}>{renderPokemonElements}</Await>
      </React.Suspense>
    </div>
  );
}
