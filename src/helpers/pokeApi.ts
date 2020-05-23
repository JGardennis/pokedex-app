import { PokemonList, Pokemon, DataRef } from "./types";

async function getPokemonById(id: string): Promise<Pokemon> {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await data.json();

  return {
    id: id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    types: pokemon.types.map((t: any) => ({
      name: t.type.name,
      url: t.type.url,
      primary: t.slot === 1,
    })),
    moves: getDataRefs(pokemon.moves, "move"),
    abilities: getDataRefs(pokemon.abilities, "ability"),
  };
}

async function getPokemonList() {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon`);

  const { count, next, previous, results }: PokemonList = await data.json();

  return {
    count: count,
    next: next,
    previous: previous,
    pokemonData: await Promise.all(
      results.map(async (res) => await getPokemonById(getIdFromUrl(res.url)))
    ),
  };
}

function getIdFromUrl(url: string): string {
  const rgx = new RegExp(/pokemon\/([\d]*)/g).exec(url);
  return rgx ? rgx[1] : "";
}

function getDataRefs(rawData: any, key: string): DataRef[] {
  return rawData.map((data: any) => {
    return { name: data[key].name, url: data[key].url };
  });
}

export { getPokemonList, getPokemonById, getIdFromUrl };
