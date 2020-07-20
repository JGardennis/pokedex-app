import React, { createContext, useReducer, Dispatch } from "react";
import { pokemonReducer, PokemonActions } from "./reducers";
import { PokemonType } from "../helpers/types";

type InitialStateType = {
  pokemon: PokemonType[];
};

const initialState = {
  pokemon: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<PokemonActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { pokemon }: InitialStateType,
  action: PokemonActions
) => ({
  pokemon: pokemonReducer(pokemon, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
