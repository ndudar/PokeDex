import React, { useState, useEffect } from "react"

//api
import { getRandomPokemon } from "../api";

//components
import RandomPokemonCard from "../components/RandomPokemonCard";

export default function RandomGenerator() {
  const [randomPokemon, setRandomPokemon] = useState(null);

  async function fetchRandomPokemon() {
    try {
      const response = await getRandomPokemon();
      return response
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchRandomPokemon()
    .then((response) => setRandomPokemon(response))
  }, [])

  return (
    randomPokemon &&
    <div>
      <RandomPokemonCard randomPokemon={randomPokemon} />
    </div>
  )
}
