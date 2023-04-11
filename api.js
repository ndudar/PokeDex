//grab all of the pokemon
export async function getPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch Pokemon",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.results
}
