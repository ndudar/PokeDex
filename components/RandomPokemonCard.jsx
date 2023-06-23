import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

//bringing in Pokedex library
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export default function RandomPokemonCard(props) {
  const [poke, setPoke] = useState(null)

  //grabbing more comprehensive data from the Pokedex library
  useEffect(() => {
    async function fetchData() {
      const pokemon = await P.getPokemonByName(props.randomPokemon.name);
      setPoke(pokemon)
    }
    fetchData()
  }, [])

  return (
    poke &&
    <div>
      <button onClick={() => window.location.reload()}>Randomize Again!</button>
      <p>Name: {poke.name}</p>
      <p>Height: {poke.height}</p>
      <p>Weight: {poke.weight}</p>
      <Link to={`/pokemon/${poke.id}`}><img src={poke.sprites.front_default}></img></Link>
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
