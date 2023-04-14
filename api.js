//grab all of the pokemon
export async function getPokemon() {
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

//might need to change the data returned if later I want access to data.next

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
