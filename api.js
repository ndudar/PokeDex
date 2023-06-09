//grab all of the pokemon
export async function getPokemon() {
  //url change allows to pull all pokemon without the 20 limiter
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch Pokemon",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data
}

//this API grabs a single pokemon with the API call
export async function getSinglePokemon(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch single pokemon",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

//this API grabs a single pokemon with the pokemon id
export async function getSinglePokemonWithId(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch single pokemon",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

//this API grabs the evolution chain data for a single pokemon with url
export async function getPokemonEvolution(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch pokemon evolution info",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

//this API call is part of a chain reaction to get to the evolution information
//first, I need to make the call to the species API
export async function getPokemonSpecies(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch pokemon species info",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

//grab a random pokemon
export async function getRandomPokemon() {
  //url change allows to pull all pokemon without the 20 limiter
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch Pokemon",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  const i = Math.floor(Math.random() * 1279)
  return data.results[i]
}
