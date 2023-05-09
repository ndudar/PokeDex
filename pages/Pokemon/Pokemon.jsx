import React from "react";
import { defer, useLoaderData, Await, useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderPokemonElements(pokemons) {
    const displayedPokemons = pokemons.results;

    //this might be where I filter?

    const pokemonsElements = displayedPokemons.map((pokemon) => (
      <PokeCardLowDetail pokemon={pokemon} key={pokemon.name}/>
    ))

    return (
      <>
      <div className="pokemon-filter-buttons">
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "normal")}>Normal</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "fire")}>Fire</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "water")}>Water</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "grass")}>Grass</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "flying")}>Flying</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "fighting")}>Fighting</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "poison")}>Poison</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "electric")}>Electric</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "ground")}>Ground</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "rock")}>Rock</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "psychic")}>Psychic</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "ice")}>Ice</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "bug")}>Bug</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "ghost")}>Ghost</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "steel")}>Steel</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "dragon")}>Dragon</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "dark")}>Dark</button>
        <button className="pokemon-button" onClick={() => handleFilterChange("type", "fairy")}>Fairy</button>
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
