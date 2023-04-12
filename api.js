//grab all of the pokemon
export async function getPokemon(id) {
  const url = id ? `https://pokeapi.co/api/v2/pokemon/${id}` : "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1279"
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
