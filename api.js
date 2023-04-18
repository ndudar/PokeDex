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
