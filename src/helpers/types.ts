export type DataItem = {
  name: string;
  url: string;
};

export type Pokemon = {
  abilities: {
    ability: DataItem;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: DataItem[];
  game_indeces: {
    game_index: number;
    version: DataItem;
  }[];
  height: number;
  heldItems: DataItem[];
  id: number;
  is_default: true;
  location_area_encounters: string;
  moves: {
    move: DataItem[];
    version_group_details: {
      level_learned_at: number;
      move_learned_method: DataItem;
      version_group: DataItem;
    }[];
  }[];
  name: string;
  order: number;
  species: DataItem;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: DataItem;
  }[];
  types: {
    slot: number;
    type: DataItem;
  }[];
  weight: number;
};

export type PokemonDetail = {
  abilities: {
    name: string;
    description: string;
  }[];
  damages: {
    doubleDamageTo: string[];
    doubleDamageFrom: string[];
    halfDamageTo: string[];
    halfDamageFrom: string[];
  };
  description: string;
};
