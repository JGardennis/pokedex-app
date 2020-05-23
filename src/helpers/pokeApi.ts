import { PokemonList, Pokemon, iDataRef } from "./types";

async function getPokemonById(id: number): Promise<Pokemon> {
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

async function getPokemonList(
  limit: number,
  offset?: number
): Promise<PokemonList> {
  const queryString = `?limit=${limit}${offset ? `offset=${offset}` : ""}`;
  const data: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon${queryString}`
  );

  const pokemonList: any = await data.json();
  return pokemonList;
}

function getIdFromUrl(url: string): string | null {
  const rgx = new RegExp(/pokemon\/([\d]*)/g).exec(url);
  return rgx ? rgx[1] : null;
}

function getDataRefs(rawData: [], key: string): iDataRef[] {
  return rawData.map((data) => {
    return { name: "", url: "" };
  });
}

export { getPokemonList, getPokemonById, getIdFromUrl };
