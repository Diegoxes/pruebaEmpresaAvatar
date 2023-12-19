import {
  LOADING_POKEMONS,
  GET_POKEMON_BY_ID,
  SET_INDEX_PAGE,
  FILTER_POKEMONS_BY_NAME,
  RESET_POKEMONS,
} from "./types";

const initialState = {
  pokemons: [],
  updatedShowPokemons: [],// se actualizan los pokemones y esto es lo que se muestra.
  indexPage: 1,
  quantityPokemons: 6,
  indexfirstPokemon: 0,
  indexLastPokemon: 6,
  quantityPages: 1,
  pokemonDetail: [],
  filteredPokemons:null
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        updatedShowPokemons: payload.slice(
          state.indexfirstPokemon,
          state.indexLastPokemon
        ),
        quantityPages: Math.ceil(payload.length / state.quantityPokemons),
      };

    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonDetail: payload,
      };
      case SET_INDEX_PAGE:
        let index = payload || state.indexPage;
        let first = (index - 1) * state.quantityPokemons;
        let last = index * state.quantityPokemons;
        let update = state.filteredPokemons
          ? state.filteredPokemons.slice(first, last)
          : state.pokemons.slice(first, last);
      
        return {
          ...state,
          indexPage: index,
          indexLastPokemon: last,
          indexFirstPokemon: first,
          updatedShowPokemons: update,
        };
      
      case FILTER_POKEMONS_BY_NAME:
        const originalPokemons = [...state.pokemons];
        const filteredByName = originalPokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(payload.toLowerCase())
        );
      
        return {
          ...state,
          indexPage:1, //cambie hoy
          filteredPokemons: filteredByName, 
          updatedShowPokemons: filteredByName.slice(0, state.quantityPokemons),
          quantityPages: Math.ceil(filteredByName.length / state.quantityPokemons),
        };

    case RESET_POKEMONS:
      return {
        ...state,
        filteredPokemons:null,
        indexPage: 1,
        indexfirstPokemon: 0,
        indexLastPokemon: state.quantityPokemons,
        updatedShowPokemons: state.pokemons.slice(0, state.quantityPokemons),
        quantityPages: Math.ceil(
          state.pokemons.length / state.quantityPokemons
        ),
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
