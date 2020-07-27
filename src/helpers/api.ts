type ApiResource = {
  name: string;
  url: string;
};

type PokemonResource = {
  id: number;
  name: string;
  image: string;
  species: ApiResource;
  types: ApiResource[];
  abilities: ApiResource[];
  moves: {
    name: string;
    url: string;
    learnedAt: number;
  };
  stats: {
    [key: string]: number;
  };
};

const BASE_URL = "https://pokeapi.co/api/v2";

async function getKeysFor(
  slug: string,
  limit: number,
  offset: number = 0
): Promise<ApiResource> {
  const response = await fetch(
    `${BASE_URL}/${slug}?limit=${limit}&offset=${offset}`
  );
  return await response.json();
}

async function getPokemonById(id: number): Promise<PokemonResource> {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await response.json();

  const stats = {};

  data.stats.forEach((item) => {
    stats[item.stat.name] = item.base_stat;
  });

  return {
    id: id,
    name: data.name,
    image: data.sprites.front_default,
    species: data.species,
    types: data.types.map((item) => item.type),
    abilities: data.abilities.map((item) => item.abilty),
    moves: data.moves.map((item) => ({
      ...item.move,
      learnedAt: item.version_group_details[0].level_learned_at,
    })),
    stats: stats,
  };
}

export { getKeysFor, getPokemonById };
