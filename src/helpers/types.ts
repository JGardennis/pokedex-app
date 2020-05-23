export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<DataRef>;
};

export type DataList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: DataRef[];
};

export type DataRef = {
  id: string;
  name: string;
  url: string;
};

export type PokemonType = {
  name: string;
  url: string;
  primary: boolean;
};

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  types: PokemonType[];
  moves: DataRef[];
  abilities: DataRef[];
};
