import { DataItem, Pokemon } from "./types";

// HELPERS
const baseUrl = "https://pokeapi.co/api/v2";

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

export { getKeys, getPokemonById };
