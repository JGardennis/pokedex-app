import {
  ApiResponse,
  RawPokemonData,
  ItemKey,
  PokemonType,
  RawTypeData,
} from "./types";

const baseUrl = "https://pokeapi.co/api/v2/";

function getEnglishEntryFromItem(item: any, key: string) {
  return item[key].find((entry: any) => {
    return entry.language.name === "en";
  });
}

function getOffsetFromUrl(url: string) {
  const regex = new RegExp(/offset=([\d]*)/gm).exec(url);
  if (regex && regex.length === 2) {
    return parseInt(regex[1]);
  }

  return 0;
}

function getIdFromUrl(url: string): string {
  const rgx = new RegExp(/v2\/[\w]*\/([\d]*)/g).exec(url);
  return rgx && rgx.length === 2 ? rgx[1] : "";
}

function extractFromRaw(arr: { [key: string]: ItemKey }[]) {
  return arr.map((item) => {
    const key = Object.keys(item)[0];
    return item[key];
  });
}

async function getPokemonById(id: string): Promise<PokemonType> {
  const data = await fetch(`${baseUrl}pokemon/${id}`);
  const response: RawPokemonData = await data.json();

  return {
    id,
    name: response.name,
    image: response.sprites.front_default,
    abilities: extractFromRaw(response.abilities),
    moves: response.moves.map(({ move, version_group_details }) => ({
      name: move.name,
      url: move.url,
      learnedAt: version_group_details[0].level_learned_at,
    })),
    stats: response.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    types: response.types.map(({ type }) => type),
  };
}

async function getMovesData(
  moves: { name: string; url: string; learnedAt: number }[]
) {
  const data = await Promise.all(
    moves.map(async (move) => {
      const res = await fetch(move.url);
      return await res.json();
    })
  );

  return data.filter((d) => d.generation.name === "generation-i");
}

async function getWeaknessesData(types: ItemKey[]) {
  const data: RawTypeData[] = await Promise.all(
    types.map(async (type) => {
      const res = await fetch(type.url);
      return await res.json();
    })
  );

  return data
    .map((item) =>
      item.damage_relations.double_damage_from.map(({ name }) => name)
    )
    .flat();
}

async function getDataFor(
  slug: string,
  options: { limit: number; offset: number }
) {
  const data = await fetch(
    `${baseUrl}${slug}?limit=${options.limit}&offset=${options.offset}`
  );
  const response: ApiResponse = await data.json();

  return response;
}

export {
  getDataFor,
  getPokemonById,
  getMovesData,
  getWeaknessesData,
  getEnglishEntryFromItem,
  getOffsetFromUrl,
  getIdFromUrl,
};
