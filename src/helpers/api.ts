import { getIdFromUrl } from "./pokeApi";

type ApiResource = {
  name: string;
  url: string;
};

type ResultResource = {
  count: number;
  next: string | null;
  prev: string | null;
  results: ApiResource[];
};

export type PokemonResource = {
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
  }[];
  stats: {
    [key: string]: number;
  };
};

type PokemonMoveResource = {
  name: string;
  accuracy: number;
  class: string;
  description: string;
  power: number;
  pp: number;
  type: string;
};

type DamageDetail = {
  from: string[];
  to: string[];
};

type PokemonTypeResource = {
  name: string;
  double_damage: DamageDetail;
  half_damage: DamageDetail;
  no_damage: DamageDetail;
};

type PokemonAbilityResource = {
  name: string;
  description: string;
};

export type PokemonDetail = {
  evolutions: {
    name: string;
    url: string;
    level: number;
  }[];
  description: string;
  moveData: PokemonMoveResource[];
  typeData: PokemonTypeResource[];
  abilityData: PokemonAbilityResource[];
};

const BASE_URL = "https://pokeapi.co/api/v2";

async function getJson(url: string) {
  const response = await fetch(`${BASE_URL}${url}`);
  return await response.json();
}

async function getPokemonList(
  limit: number,
  offset: number = 0
): Promise<{
  count: number;
  next: string | null;
  prev: string | null;
  results: PokemonResource[];
}> {
  const data: ResultResource = await getJson(
    `/pokemon?limit=${limit}&offset=${offset}`
  );

  return {
    ...data,
    results: await Promise.all(
      data.results.map(async ({ url }) => {
        const pokemonId = getIdFromUrl(url);
        const data = await getJson(`/pokemon/${pokemonId}`);
        const stats = {};

        data.stats.forEach((item) => {
          stats[item.stat.name] = item.base_stat;
        });

        return {
          id: parseInt(pokemonId),
          name: data.name,
          image: data.sprites.front_default,
          species: data.species,
          types: data.types.map((item) => item.type),
          abilities: data.abilities.map((item) => item.ability),
          moves: data.moves.map((item) => ({
            ...item.move,
            learnedAt: item.version_group_details[0].level_learned_at,
          })),
          stats: stats,
        };
      })
    ),
  };
}

async function getPokemonDetail(
  pokemon: PokemonResource
): Promise<PokemonDetail> {
  const speciesData = await getJson(`/pokemon-species/${pokemon.id}`);

  // MOVELIST STATS
  const moves = await Promise.all(
    pokemon.moves.map(async ({ url }) => {
      const data = await getJson(`/move/${getIdFromUrl(url)}`);

      return {
        name: data.name,
        accuracy: data.accuracy,
        class: data.damage_class.name,
        description: data.flavor_text_entries[0].flavor_text,
        power: data.power,
        pp: data.pp,
        type: data.type.name,
      };
    })
  );

  // STRENGTHS, WEAKNESSES
  const types = await Promise.all(
    pokemon.types.map(async ({ url }) => {
      const data = await getJson(`/type/${getIdFromUrl(url)}`);

      const getDamages = (str: string) =>
        data.damage_relations[str].map(({ name }) => name);

      return {
        name: data.name,
        double_damage: {
          from: getDamages("double_damage_from"),
          to: getDamages("double_damage_to"),
        },
        half_damage: {
          from: getDamages("half_damage_from"),
          to: getDamages("half_damage_to"),
        },
        no_damage: {
          from: getDamages("no_damage_from"),
          to: getDamages("no_damage_to"),
        },
      };
    })
  );

  // ABILITIES
  const abilities = await Promise.all(
    pokemon.abilities.map(async ({ url }) => {
      const data = await getJson(`/ability/${getIdFromUrl(url)}`);

      return {
        name: data.name,
        description: data.effect_entries[0].effect,
      };
    })
  );

  return {
    evolutions: [],
    description: speciesData.flavor_text_entries[0].flavor_text,
    moveData: moves,
    typeData: types,
    abilityData: abilities,
  };
}

async function getPokemonById(id: number): Promise<PokemonResource> {
  const data = await getJson(`/pokemon/${id}`);
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

export { getPokemonById, getPokemonList, getPokemonDetail };
