import React, { useState, useEffect } from "react"
import { defer, useLoaderData, Await, useSearchParams } from "react-router-dom";

//bringing in Pokedex library
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

//api
import { getRandomPokemon } from "../api";

//components
import RandomPokemonCard from "../components/RandomPokemonCard";

//grabs random pokemon
// export function loader() {
//   return defer({ pokemon: getRandomPokemon() });
// }

export default function RandomGenerator() {
  const [randomPokemon, setRandomPokemon] = useState(null);

  async function fetchRandomPokemon() {
    try {
      const response = await getRandomPokemon();
      // const pokeName = response.name;
      // const pokemon = await P.getPokemonByName(pokeName)
      return response
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchRandomPokemon()
    .then((response) => setRandomPokemon(response))
  }, [])

  //const dataPromise = useLoaderData();

  // function renderRandomPokemon(pokemon) {
  //   const displayedPokemon = pokemon;
  //   console.log(displayedPokemon);

  //   return (
  //     <div>
  //       <RandomGenerator displayedPokemon={displayedPokemon} />
  //     </div>
  //   )

  // }

  return (
    randomPokemon && 
    <div>
      {/* <React.Suspense fallback={<h2>Loading random pokemon...</h2>}>
        <Await resolve={dataPromise.pokemon}>{renderRandomPokemon}</Await>
      </React.Suspense> */}
      <RandomPokemonCard randomPokemon={randomPokemon} />
    </div>
  )
}
