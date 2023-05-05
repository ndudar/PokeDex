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

//18 types for filtering reference later:
//normal, fire, water, grass, flying, fighting, poison, electric, ground,
//rock, psychic, ice, bug, ghost, steel, dragon, dark, fairy

export default function Pokemon() {
  const dataPromise = useLoaderData();

  function renderPokemonElements(pokemons) {
    const displayedPokemons = pokemons.results;

    //this might be where I filter?

    const pokemonsElements = displayedPokemons.map((pokemon) => (
      <PokeCardLowDetail pokemon={pokemon} key={pokemon.name}/>
    ))

    return (
      <>
      <div className="pokemon-filter-buttons">
        <button className="pokemon-button">Normal</button>
        <button className="pokemon-button">Fire</button>
        <button className="pokemon-button">Water</button>
        <button className="pokemon-button">Grass</button>
        <button className="pokemon-button">Flying</button>
        <button className="pokemon-button">Fighting</button>
        <button className="pokemon-button">Poison</button>
        <button className="pokemon-button">Electric</button>
        <button className="pokemon-button">Ground</button>
        <button className="pokemon-button">Rock</button>
        <button className="pokemon-button">Psychic</button>
        <button className="pokemon-button">Ice</button>
        <button className="pokemon-button">Bug</button>
        <button className="pokemon-button">Ghost</button>
        <button className="pokemon-button">Steel</button>
        <button className="pokemon-button">Dragon</button>
        <button className="pokemon-button">Dark</button>
        <button className="pokemon-button">Fairy</button>
      </div>
      <div className="pokemon-list">{pokemonsElements}</div>
      </>
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
