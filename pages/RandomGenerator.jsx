import React, { useState, useEffect } from "react"

//bringing in Pokedex library
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

//api
import { getRandomPokemon } from "../api";

export default function RandomGenerator() {
  const [randomPokemon, setRandomPokemon] = useState({});

  async function fetchRandomPokemon() {
    try {
      const response = await getRandomPokemon();
      const pokeName = response.name;
      const pokemon = await P.getPokemonByName(pokeName)
      return pokemon
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchRandomPokemon()
    .then((response) => setRandomPokemon(response))
    .then(console.log(randomPokemon))
  }, [])

  return (
    <div>
      <h1>I'm the random generator</h1>
      <p>Name: {randomPokemon.name}</p>
      {/* <img src={randomPokemon.sprites.front_default}/> */}
      <p>Height: {randomPokemon.height}</p>
      <p>Weight: {randomPokemon.weight}</p>
    </div>
  )
}
