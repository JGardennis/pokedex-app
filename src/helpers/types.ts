export type ItemKey = {
  name: string;
  url: string;
};

export type PokemonType = {
  id: string;
  name: string;
  image: string;
  abilities: ItemKey[];
  moves: {
    name: string;
    url: string;
    learnedAt: number;
  }[];
  stats: {
    name: string;
    value: number;
  }[];
  types: ItemKey[];
};
