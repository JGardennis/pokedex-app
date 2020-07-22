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
  weight: number;
};
