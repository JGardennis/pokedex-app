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

type PokemonPayload = {
  [Types.Update]: PokemonType[];
  [Types.Remove]: PokemonType;
};

export type PokemonActions = ActionMap<PokemonPayload>[keyof ActionMap<
  PokemonPayload
>];

export const pokemonReducer = (
  state: PokemonType[],
  action: PokemonActions
) => {
  switch (action.type) {
    case Types.Update:
      return [...state, ...action.payload];
    case Types.Remove:
      return [...state.filter((p) => p.id !== action.payload.id)];
    default:
      return state;
  }
};
