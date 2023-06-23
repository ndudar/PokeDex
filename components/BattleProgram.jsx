import React, { useState, useEffect } from "react";

//bringing in Pokedex library
import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

export default function BattleProgram(props) {
  const {
    poke1HP,
    poke2HP,
    poke1Attack,
    poke2Attack,
    poke1Defense,
    poke2Defense,
    poke1Name,
    poke2Name,
    poke1Moves,
    poke2Moves,
  } = props;

  let poke1CurrentHP = poke1HP;
  let poke2CurrentHP = poke2HP;

  console.log(poke1Moves)
  console.log(poke2Moves)

  return (
    <div>
      <h3>Here's the battle program</h3>
      <p>Team 1: {poke1Name}</p>
      <p>Team 2: {poke2Name}</p>
      <p>Team 1 HP: {poke1HP}</p>
      <p>Team 2 HP: {poke2HP}</p>
      <p>Team 1 Attack: {poke1Attack}</p>
      <p>Team 2 Attack: {poke2Attack}</p>
      <p>Team 1 Defense: {poke1Defense}</p>
      <p>Team 2 Defense: {poke2Defense}</p>
    </div>
  );
}
