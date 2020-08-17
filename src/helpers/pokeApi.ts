import {
  Pokemon,
  getKeysResponse,
  getPokemonDetailResponse,
  getFormResposne,
} from "./types";
import { getIdFromUrl } from "./strings";

// HELPERS
const BASE_URL = "https://pokeapi.co/api/v2";

const getData = async (id: string) => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  return await response.json();
};

const fetchFromApi = (url) => fetch(url).then((res) => res.json());

// GET REQUESTS

async function getKeys(
  slug: string,
  limit: number = 30,
  offset: number = 0
): Promise<getKeysResponse> {
  const response = await fetch(
    `${BASE_URL}/${slug}?limit=${limit}&offset=${offset}`
  );

  return await response.json();
}

async function getPokemonFromKeys(
  keys: { name: string; url: string }[]
): Promise<Pokemon[]> {
  return Promise.all(
    keys.map(async (key) => await getData(getIdFromUrl(key.url)))
  );
}

async function getPokemonById(id: string): Promise<Pokemon> {
  return getData(id);
}

async function getPokemonSprites(id: number): Promise<getFormResposne> {
  const formRes = await fetchFromApi(`${BASE_URL}/pokemon-form/${id}`);

  return {
    name: formRes.name,
    sprites: formRes.sprites,
  };
}

async function getPokemonDetail(
  pokemon: Pokemon
): Promise<getPokemonDetailResponse> {
  const speciesRes = await fetchFromApi(pokemon.species.url);
  const evolutionRes = await fetchFromApi(speciesRes.evolution_chain.url);

  const abilitiesRes = await Promise.all(
    pokemon.abilities.map(async (a) => await fetchFromApi(a.ability.url))
  );

  const typesRes = await Promise.all(
    pokemon.types.map(async (t) => await fetchFromApi(t.type.url))
  );

  const getDamagesByKey = (key) => [
    ...new Set(
      typesRes.flatMap(({ damage_relations }) =>
        damage_relations[key].map((t) => t.name)
      )
    ),
  ];

  let evolutions: {
    id: number;
    name: string;
    image: string;
    evolutionLevel: number;
  }[] = [];
  let digging = true;

  if (evolutionRes.chain) {
    let chain = evolutionRes.chain.evolves_to[0];

    while (digging) {
      const species = await fetchFromApi(chain.species.url);
      const pokemon = await fetchFromApi(species.varieties[0].pokemon.url);

      evolutions.push({
        id: pokemon.id,
        name: species.name,
        image: pokemon.sprites.front_default,
        evolutionLevel: chain.evolution_details[0].min_level,
      });

      if (chain.evolves_to.length > 0) {
        chain = chain.evolves_to[0];
      } else {
        digging = false;
      }
    }
  }

  return {
    description: speciesRes.flavor_text_entries.find(
      (f) => f.version.name === "red"
    ).flavor_text,
    abilities: abilitiesRes.map((a) => ({
      name: a.name,
      description: a.effect_entries.find((item) => item.language.name === "en")
        .effect,
    })),
    evolutions: evolutions,
    strengths: {
      doubleDamage: getDamagesByKey("double_damage_to"),
      halfDamage: getDamagesByKey("half_damage_from"),
      noDamage: getDamagesByKey("no_damage_from"),
    },
    weaknesses: {
      doubleDamage: getDamagesByKey("double_damage_from"),
      halfDamage: getDamagesByKey("half_damage_to"),
      noDamage: getDamagesByKey("no_damage_to"),
    },
  };
}

export {
  getKeys,
  getPokemonById,
  getPokemonFromKeys,
  getPokemonDetail,
  getPokemonSprites,
};
