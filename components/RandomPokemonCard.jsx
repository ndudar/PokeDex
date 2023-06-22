import React, { useState, useEffect } from "react";

//bringing in Pokedex library
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

//api
import { getSinglePokemon } from "../api"

export default function RandomPokemonCard(props) {
  const [poke, setPoke] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const pokemon = await P.getPokemonByName(props.randomPokemon.name);
      setPoke(pokemon)
    }
    fetchData()
  }, [])

  //since we don't have access to the poke id, we make the api call with the url
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getSinglePokemon(url)
  //     setPoke(response)
  //   }
  //   fetchData()
  // }, [url])

  return (
    poke &&
    <div>
      <p>Name: {poke.name}</p>
      <p>Height: {poke.height}</p>
      <p>Weight: {poke.weight}</p>
      <img src={poke.sprites.front_default}></img>
      <p>Types:</p>
      {poke.types.map((type) => (
        <p key={type.type.name}>{type.type.name}</p>
      ))}
      <p>Abilities:</p>
      {poke.abilities.map((ability) => (
        <p key={ability.ability.name}>{ability.ability.name}</p>
      ))}
    </div>
  )
}
