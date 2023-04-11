import React from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

//api
import { getPokemon } from "../../api";

export function loader() {
  return defer({ pokemons: getPokemon() });
}

export default function Pokemon() {
  const dataPromise = useLoaderData();

  function renderPokemonElements(pokemons) {
    const displayedPokemons = pokemons;

    const pokemonsElements = displayedPokemons.map((pokemon) => (
      <div key={pokemon.id}>
        <h3>{pokemon.name}</h3>
      </div>
    ))

    return (
      <div>{pokemonsElements}</div>
    )
  }

  return (
    <div>
      <h1>Checkout the Pokemon!</h1>
      <React.Suspense fallback={<h2>Loading Pokemon...</h2>}>
        <Await resolve={dataPromise.pokemons}>{renderPokemonElements}</Await>
      </React.Suspense>
    </div>
  );
}

//loader function
// export function loader() {
//   return defer({ pokemons: getPokemon().results });
// }

// export default function Pokemon() {
//   const dataPromise = useLoaderData();

//   function renderPokemonElements(pokemons) {
//     const displayedPokemon = pokemons;

//     console.log(pokemons)

//     const pokemonElements = displayedPokemon.map((pokemon) => (
//       <div key={pokemon.url}>
//         {/* <img src={pokemon.sprites.front_default} /> */}
//         <div>
//           <h3>{pokemon.name}</h3>
//         </div>
//       </div>
//     ));

//     return <div>{pokemonElements}</div>;
//   }

//   return (
//     <div>
//       <h1>Checkout the Pokemon!</h1>
//       <React.Suspense fallback={<h2>Loading Pokemon...</h2>}>
//         <Await resolve={dataPromise.pokemons}>{renderPokemonElements}</Await>
//       </React.Suspense>
//     </div>
//   );
// }
