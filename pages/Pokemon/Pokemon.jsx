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


    const pokemonsElements = displayedPokemons.map((pokemon) => (
      <PokeCardLowDetail
        pokemon={pokemon}
        key={pokemon.name}
        typeFilter={typeFilter}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      />
    ));

    return (
      <>
        <div className="pokemon-filter-buttons">
          <button
            className={`pokemon-button normal
                        ${typeFilter === "normal" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "normal")}
          >
            Normal
          </button>
          <button
            className={`pokemon-button fire
                        ${typeFilter === "fire" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "fire")}
          >
            Fire
          </button>
          <button
            className={`pokemon-button water
                        ${typeFilter === "water" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "water")}
          >
            Water
          </button>
          <button
            className={`pokemon-button grass
                        ${typeFilter === "grass" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "grass")}
          >
            Grass
          </button>
          <button
            className={`pokemon-button flying
                        ${typeFilter === "flying" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "flying")}
          >
            Flying
          </button>
          <button
            className={`pokemon-button fighting
                        ${typeFilter === "fighting" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "fighting")}
          >
            Fighting
          </button>
          <button
            className={`pokemon-button poison
                        ${typeFilter === "poison" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "poison")}
          >
            Poison
          </button>
          <button
            className={`pokemon-button electric
                        ${typeFilter === "electric" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "electric")}
          >
            Electric
          </button>
          <button
            className={`pokemon-button ground
                        ${typeFilter === "ground" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "ground")}
          >
            Ground
          </button>
          <button
            className={`pokemon-button rock
                        ${typeFilter === "rock" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "rock")}
          >
            Rock
          </button>
          <button
            className={`pokemon-button psychic
                        ${typeFilter === "psychic" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "psychic")}
          >
            Psychic
          </button>
          <button
            className={`pokemon-button ice
                        ${typeFilter === "ice" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "ice")}
          >
            Ice
          </button>
          <button
            className={`pokemon-button bug
                        ${typeFilter === "bug" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "bug")}
          >
            Bug
          </button>
          <button
            className={`pokemon-button ghost
                        ${typeFilter === "ghost" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "ghost")}
          >
            Ghost
          </button>
          <button
            className={`pokemon-button steel
                        ${typeFilter === "steel" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "steel")}
          >
            Steel
          </button>
          <button
            className={`pokemon-button dragon
                        ${typeFilter === "dragon" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "dragon")}
          >
            Dragon
          </button>
          <button
            className={`pokemon-button dark
                        ${typeFilter === "dark" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "dark")}
          >
            Dark
          </button>
          <button
            className={`pokemon-button fairy
                        ${typeFilter === "fairy" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "fairy")}
          >
            Fairy
          </button>

          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="pokemon-button clear-filters"
            >
              Clear Filter
            </button>
          ) : null}

        </div>
        <div className="pokemon-list">{pokemonsElements}</div>
      </>
    );
  }

  return (
    <div className="pokemon-list-container">
      <h2>Checkout the Pokemon!</h2>
      <p>Select a filter:</p>
      <React.Suspense fallback={<h2>Loading Pokemon...</h2>}>
        <Await resolve={dataPromise.pokemons}>{renderPokemonElements}</Await>
      </React.Suspense>
    </div>
  );
}
