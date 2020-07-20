import {
  ApiResponse,
  RawPokemonData,
  ItemKey,
  PokemonType,
  RawTypeData,
  RawMoveData,
} from "./types";
import { report } from "process";

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

  const typeData = await Promise.all(
    response.types.map(async ({ type }) => {
      const res = await fetch(`${type.url}`);
      const raw: RawTypeData = await res.json();
      return raw.damage_relations.double_damage_from.map((item) => item.name);
    })
  );

  const moveData = await Promise.all(
    response.moves.map(async ({ move, version_group_details }) => {
      const res = await fetch(`${move.url}`);
      const raw: RawMoveData = await res.json();
      return {
        name: raw.name,
        accuracy: raw.accuracy,
        class: raw.damage_class.name,
        description: raw.effect_entries.effect,
        power: raw.power,
        pp: raw.pp,
        type: raw.type.name,
      };
    })
  );

  debugger;

  return {
    id,
    name: response.name,
    image: response.sprites.front_default,
    abilities: extractFromRaw(response.abilities),
    moves: moveData,
    stats: response.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    types: response.types.map((type) => type.type.name),
    weaknesses: typeData.flat(),
  };
}

async function getSlugsFor(
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
  getSlugsFor,
  getPokemonById,
  getEnglishEntryFromItem,
  getOffsetFromUrl,
  getIdFromUrl,
};
