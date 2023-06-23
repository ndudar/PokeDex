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
      const response2 = await getRandomPokemon();
      const pokemon2 = await P.getPokemonByName(response2.name);
      setPoke2(pokemon2);
    }
    fetchData();
  }, [])

      // const poke1HP = poke1.stats[0].base_stat
      // const poke1Attack = poke1.stats[1].base_stat
      // const poke1Defense = poke1.stats[2].base_stat
      // const poke1Moves = poke1.moves

      // const poke2HP = poke2.stats[0].base_stat
      // const poke2Attack = poke2.stats[1].base_stat
      // const poke2Defense = poke2.stats[2].base_stat
      // const poke2Moves = poke2.moves

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
      <div>I'm the battle simulator!</div>
    </div> : null
  );
}
