import { ListData, Pokemon, DataRef, Move, Ability, Item } from "./types";
import { capitalize } from "./strings";
/****
 *
 * POKEMON
 *
 */
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

async function getPokemonList(query?: string) {
  const data = await getDataList("pokemon", query);
  const pokemon = await Promise.all(
    data.results.map(async ({ url }) => await getPokemonById(getIdFromUrl(url)))
  );

  return {
    ...data,
    results: pokemon,
  };
}

/****
 *
 * MOVES
 *
 */
async function getMoveById(id: string): Promise<Move> {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
  const move = await data.json();

  return {
    id: id,
    name: move.name.replace(/[-]/g, " ").toUpperCase(),
    class: capitalize(move.damage_class.name),
    type: move.type.name,
    text: getEnglishEntryFromItem(move, "flavor_text_entries").flavor_text,
    effects: move.effect_entries.map((entry: any) => entry.effect),
    effectChance: move.effect_chance,
    power: move.power || 0,
    accuracy: move.accuracy || 0,
    pp: move.pp,
  };
}

async function getMoveList(query?: string) {
  const data = await getDataList("move", query);
  const moves = await Promise.all(
    data.results.map(async ({ url }) => await getMoveById(getIdFromUrl(url)))
  );

  return {
    ...data,
    results: moves,
  };
}

/****
 *
 * ABILITIES
 *
 */
async function getAbilityById(id: string): Promise<Ability> {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
  const ability = await data.json();

  const pokemon = await getPokemonById(
    getIdFromUrl(ability.pokemon[0].pokemon.url)
  );

  return {
    id: ability.id,
    name: ability.name,
    type: pokemon.types.find((t) => !!t.primary)?.name || "",
    text: getEnglishEntryFromItem(ability, "flavor_text_entries").flavor_text,
    battleEffect: getEnglishEntryFromItem(ability, "effect_entries").effect,
    pokemonIds: ability.pokemon.map((p: any) => getIdFromUrl(p.pokemon.url)),
  };
}

async function getAbilityList(query?: string) {
  const data = await getDataList("ability", query);
  const abilities = await Promise.all(
    data.results.map(async ({ url }) => await getAbilityById(getIdFromUrl(url)))
  );

  return {
    ...data,
    results: abilities,
  };
}

/****
 *
 * ITEMS
 *
 */
async function getItemById(id: string): Promise<Item> {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
  const item = await data.json();

  return {
    id: item.id,
    name: item.name.replace(/[-]/g, " "),
    image: item.sprites.default,
    text: getEnglishEntryFromItem(item, "effect_entries").short_effect,
  };
}

async function getItemList(query?: string) {
  const data = await getDataList("ability", query);
  const items = await Promise.all(
    data.results.map(async ({ url }) => await getItemById(getIdFromUrl(url)))
  );

  return {
    ...data,
    results: items,
  };
}

/****
 *
 * UTILITIES
 *
 */

function getEnglishEntryFromItem(item: any, key: string) {
  return item[key].find((entry: any) => {
    return entry.language.name === "en";
  });
}

async function getDataList(item: string, query?: string) {
  const url = `https://pokeapi.co/api/v2/${item}`;
  const data: Response = await fetch(`${url}${query || ""}`);
  const { count, next, previous, results }: ListData = await data.json();

  return {
    count: count,
    next: next ? next.substring(next.indexOf("?")) : null,
    previous: previous ? previous.substring(previous.indexOf("?")) : null,
    results: results.map(({ name, url }) => ({
      id: getIdFromUrl(url),
      name: name,
      url: url,
    })),
  };
}

function getIdFromUrl(url: string): string {
  const rgx = new RegExp(/v2\/[\w]*\/([\d]*)/g).exec(url);
  return rgx && rgx.length === 2 ? rgx[1] : "";
}

function getDataRefs(rawData: any, key: string): DataRef[] {
  return rawData.map((data: any) => {
    return { name: data[key].name, url: data[key].url };
  });
}

export { getPokemonList, getMoveList, getAbilityList, getItemList };
