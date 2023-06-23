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

  const [currentMove, setCurrentMove] = useState(null);
  const [battleText, setBattleText] = useState(
    `The pokemon are ready to battle!`
  );
  const [currentPokemon, setCurrentPokemon] = useState(poke1Name);
  const [battleButtonText, setBattleButtonText] = useState(`Let's battle!`);
  const [poke1CurrentHP, setPoke1CurrentHP] = useState(poke1HP);
  const [poke2CurrentHP, setPoke2CurrentHP] = useState(poke2HP);

  async function handleClick() {
    const randomMove =
      currentPokemon === poke1Name
        ? poke1Moves[Math.floor(Math.random() * poke1Moves.length)]
        : poke2Moves[Math.floor(Math.random() * poke2Moves.length)];
    const randomMovePromise = await P.getMoveByName(randomMove.move.name);
    setCurrentMove(randomMovePromise);
    setBattleText(`${currentPokemon} uses ${randomMove.move.name}!`);
    setCurrentPokemon(currentPokemon === poke1Name ? poke2Name : poke1Name);

    const hit = randomMovePromise.pp;
    if (currentPokemon === poke1Name) {
      setPoke2CurrentHP((prevHP) => prevHP - calculateDamage(poke1Attack, poke2Defense, hit));
    } else {
      setPoke1CurrentHP((prevHP) => prevHP - calculateDamage(poke2Attack, poke1Defense, hit));
    }

    setBattleButtonText(
      poke1CurrentHP <= 0 || poke2CurrentHP <= 0 ? `Battle Over!` : `Next Move!`
    );
  }

  // useEffect(() => {
  //   const hit = currentMove?.pp;
  //   if (currentPokemon === poke1Name) {
  //     setPoke2CurrentHP(poke2CurrentHP - calculateDamage(poke1Attack, poke2Defense, hit));
  //   } else {
  //     setPoke1CurrentHP(poke1CurrentHP - calculateDamage(poke2Attack, poke1Defense, hit));
  //   }
  // }, [currentMove, currentPokemon]);

  //this is a formula I'm making up that gives the battle a good pace
  function calculateDamage(attack, defense, power) {
    const quotient = attack / defense;
    const mod = attack % defense;
    return Math.round(power * quotient + mod / 3);
  }

  return (
    <div>
      <h3>Here's the battle program</h3>
      <p>Team 1: {poke1Name}</p>
      <p>Team 2: {poke2Name}</p>
      <p>Team 1 HP: {poke1CurrentHP ? poke1CurrentHP : poke1HP}</p>
      <p>Team 2 HP: {poke2CurrentHP ? poke2CurrentHP : poke2HP}</p>
      <p>Team 1 Attack: {poke1Attack}</p>
      <p>Team 2 Attack: {poke2Attack}</p>
      <p>Team 1 Defense: {poke1Defense}</p>
      <p>Team 2 Defense: {poke2Defense}</p>
      <button onClick={() => handleClick()}>{battleButtonText}</button>
      <p>{battleText}</p>
    </div>
  );
}
