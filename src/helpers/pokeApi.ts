import { DataItem, Pokemon, PokemonDetail } from "./types";

// HELPERS
const baseUrl = "https://pokeapi.co/api/v2";

const getEnglishEntry = (data: any, returnKey?: string) => {
  const found = data.find((item) => item.language.name === "en");

  if (found) {
    return returnKey ? found[returnKey] : found;
  }

  return null;
};

// TYPES
type getKeysResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: DataItem[];
};

// GET REQUESTS

async function getKeys(
  slug: string,
  limit: number = 30,
  offset: number = 0
): Promise<getKeysResponse> {
  const response = await fetch(
    `${baseUrl}/${slug}?limit=${limit}&offset=${offset}`
  );

  return await response.json();
}

async function getPokemonById(ids: string | string[]): Promise<Pokemon[]> {
  const getData = async (id) => {
    const response = await fetch(`${baseUrl}/pokemon/${id}`);
    return await response.json();
  };

  if (typeof ids === "string") {
    return getData(ids);
  } else if (Array.isArray(ids)) {
    return Promise.all(ids.map(async (id) => await getData(id)));
  }

  return [];
}

async function getPokemonDetails(pokemon: Pokemon): Promise<PokemonDetail> {
  const speciesResponse = await fetch(pokemon.species.url).then((res) =>
    res.json()
  );

  const abilityResponse = await Promise.all(
    pokemon.abilities.map(({ ability }) =>
      fetch(ability.url).then((res) => res.json())
    )
  );

  return {
    abilities: abilityResponse.map((ability) => ({
      name: ability.name,
      description: getEnglishEntry(ability.flavor_text_entries, "flavor_text"),
    })),
    description: getEnglishEntry(
      speciesResponse.flavor_text_entries,
      "flavor_text"
    ),
  };
}

export { getKeys, getPokemonById, getPokemonDetails };
