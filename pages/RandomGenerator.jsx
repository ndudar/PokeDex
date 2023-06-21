import React, { useState, useEffect } from "react"
import { defer, useLoaderData, Await, useSearchParams } from "react-router-dom";

//bringing in Pokedex library
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

//api
import { getRandomPokemon } from "../api";

//grabs random pokemon
export function loader() {
  return defer({ pokemon: getRandomPokemon() });
}

export default function RandomGenerator() {
  // const [randomPokemon, setRandomPokemon] = useState({});

  // async function fetchRandomPokemon() {
  //   try {
  //     const response = await getRandomPokemon();
  //     const pokeName = response.name;
  //     const pokemon = await P.getPokemonByName(pokeName)
  //     return pokemon
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // useEffect(() => {
  //   fetchRandomPokemon()
  //   .then((response) => setRandomPokemon(response))
  // }, [])
  const dataPromise = useLoaderData();

  async function renderRandomPokemon(pokemon) {
    // const displayedPokemon = pokemon;
    // console.log(displayedPokemon);
    const randomPokemon = async (pokemon) => {
      const pokeName = pokemon.name;
      const result = await P.getPokemonByName(pokeName);
      return result
    }
    const displayedPokemon = await randomPokemon(pokemon);
    console.log(displayedPokemon);

    return (
      <div>
        <h1>We're in the render random!</h1>
      <p>Name: {displayedPokemon.name}</p>
      <img src={displayedPokemon.sprites.front_default}/>
      <p>Height: {displayedPokemon.height}</p>
      <p>Weight: {displayedPokemon.weight}</p>
    </div>
    )

  }

  return (
    <div>
      <React.Suspense fallback={<h2>Loading random pokemon...</h2>}>
        <Await resolve={dataPromise.pokemon}>{renderRandomPokemon}</Await>
      </React.Suspense>
    </div>
  )
}
