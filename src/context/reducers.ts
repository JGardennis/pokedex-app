import { PokemonType } from "../helpers/types";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export enum Types {
  Update = "UPDATE_POKEMON",
  Remove = "REMOVE_POKEMON",
}

type DataType = {
  id: number;
  name: string;
  [key: string]: string | number;
};

type PokemonPayload = {
  [Types.Update]: DataType;
  [Types.Remove]: DataType;
};

export type PokemonActions = ActionMap<PokemonPayload>[keyof ActionMap<
  PokemonPayload
>];

export const pokemonReducer = (state: DataType[], action: PokemonActions) => {
  switch (action.type) {
    case Types.Update:
      const existingData = state.find((p) => p.id === action.payload.id);

      if (existingData) {
        return [...state, { ...existingData, ...action.payload }];
      }
      return [...state, { ...action.payload }];
    case Types.Remove:
      return [...state.filter((p) => p.id !== action.payload.id)];
    default:
      return state;
  }
};
