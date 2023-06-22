import React, { useState, useEffect }  from "react";

//api
import { getRandomPokemon } from "../api";

//bringing in Pokedex library
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export default function BattleSimulator() {
  const [poke1, setPoke1] = useState(null);
  const [poke2, setPoke2] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response1 = await getRandomPokemon();
      const pokemon1 = await P.getPokemonByName(response1.name);
      setPoke1(pokemon1);
      console.log("poke1: ", poke1)
      const response2 = await getRandomPokemon();
      const pokemon2 = await P.getPokemonByName(response2.name);
      setPoke2(pokemon2);
      console.log("poke2: ", poke2)
    }
    fetchData();
  }, [])

  return (
    poke1 && poke2 ?
    <div className="battle-simulator">
      <div className="poke1">
        <p>Name: {poke1.name}</p>
        <img src={poke1.sprites.front_default}></img>
      </div>
      <div className="poke2">
        <p>Name: {poke2.name}</p>
        <img src={poke2.sprites.front_default}></img>
      </div>
      <div>I'm the battle simlulator!</div>
    </div> : null
  );
}
