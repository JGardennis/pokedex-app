export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ItemKey[];
};

export type ItemKey = {
  name: string;
  url: string;
};

export type RawPokemonData = {
  id: number;
  name: string;
  abilities: {
    ability: ItemKey;
  }[];
  moves: {
    move: ItemKey;
    version_group_details: {
      level_learned_at: 0;
    }[];
  }[];
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  stats: {
    base_stat: number;
    stat: ItemKey;
  }[];
  types: {
    slot: number;
    type: ItemKey;
  }[];
};

export type RawTypeData = {
  damage_relations: {
    double_damage_from: ItemKey[];
    double_damage_to: ItemKey[];
    half_damage_from: ItemKey[];
    half_damage_to: ItemKey[];
  };
};

export type RawMoveData = {
  accuracy: number;
  damage_class: ItemKey;
  effect_entries: {
    effect: string;
    langauge: ItemKey;
    short_effect: string;
  };
  name: string;
  power: number;
  pp: number;
  type: ItemKey;
};

export type MoveData = {
  accuracy: number;
  class: string;
};

export type DataRef = {
  id: string;
  name: string;
  url: string;
};

export type PokemonType = {
  id: string;
  name: string;
  image: string;
  abilities: ItemKey[];
  moves: MoveData[];
  stats: {
    name: string;
    value: number;
  }[];
  types: string[];
  weaknesses: string[];
};

export type Ability = {
  id: string;
  name: string;
  text: string;
  type: PokemonTypeNames;
  battleEffect: string;
  pokemonIds: number[];
};

export type Item = {
  id: string;
  name: string;
  image: string;
  text: string;
};

export type PokemonTypeNames =
  | "grass"
  | "bug"
  | "fire"
  | "water"
  | "electric"
  | "poison"
  | "psychic"
  | "dark"
  | "fighting"
  | "flying"
  | "ground"
  | "ghost"
  | "fairy"
  | "steel"
  | "ice"
  | "rock"
  | "dragon"
  | "normal";
