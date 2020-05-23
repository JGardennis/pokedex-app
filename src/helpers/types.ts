export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<iDataRef>;
};

export type iDataRef = {
  name: string;
  url: string;
};

export type iPokemonType = {
  name: string;
  url: string;
  primary: boolean;
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: iPokemonType[];
  moves: iDataRef[];
  abilities: iDataRef[];
};
