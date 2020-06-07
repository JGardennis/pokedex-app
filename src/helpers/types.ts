export type ListData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<DataRef>;
};

export type DataRef = {
  id: string;
  name: string;
  url: string;
};

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  types: PokemonType[];
  moves: DataRef[];
  abilities: DataRef[];
};

export type Move = {
  id: string;
  name: string;
  class: string;
  type: string;
  text: string;
  effects: string[];
  effectChance: string;
  power: number;
  accuracy: number;
  pp: number;
};

export type Ability = {
  id: string;
  name: string;
  text: string;
  type: string;
  battleEffect: string;
  pokemonIds: number[];
};

export type Item = {
  id: string;
  name: string;
  image: string;
  text: string;
};

export type PokemonType = {
  name: string;
  url: string;
  primary: boolean;
};
