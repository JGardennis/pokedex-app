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
  text: string;
  effects: string[];
  effectChance: string;

  power: number;
  accuracy: number;
  pp: number;
};

export type PokemonType = {
  name: string;
  url: string;
  primary: boolean;
};
