import {
  LOADING_POKEMONS,
  GET_POKEMON_BY_ID,
  SET_INDEX_PAGE,
  FILTER_POKEMONS_BY_NAME,
  RESET_POKEMONS,
} from "./types";

import axios from "axios";

export const loadingPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=140"
      );
      const responses = await Promise.all(
        data.results.map((pokemon) => axios(pokemon.url))
      );

      const pokemons = responses.map((response) => {
        const { id, name, sprites, stats, weight, height, types } =
          response.data;
        let allTypes = types.map((type) => ({ name: type.type.name }));
        let img =
          sprites.other.home.front_default !== null
            ? sprites.other.home.front_default
            : "https://cdn.vox-cdn.com/thumbor/PSIN27PZ8SJuO5QcOePOsHiMvfQ=/0x0:1920x1080/1570x628/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/53262569/who_pokemon.0.jpg";

        return {
          id,
          name,
          image: img,
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          speed: stats[5].base_stat,
          weight,
          height,
          types: allTypes,
        };
      });

      dispatch({ type: LOADING_POKEMONS, payload: pokemons });
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const setIndexPage = (index) => {
  return async (dispatch) => {
    await dispatch({ type: SET_INDEX_PAGE, payload: index });
  };
};

export const getPokemonById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, sprites, stats, weight, height, types } = data;
    const allTypes = types.map((type) => ({ name: type.type.name }));
    const pokemon = {
      id,
      name,
      image: sprites.other.home.front_default,
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      speed: stats[5].base_stat,
      weight,
      height,
      types: allTypes,
    };
    dispatch({ type: GET_POKEMON_BY_ID, payload: pokemon });
  } catch (error) {
    console.error("Error :c :", error);
    throw new Error(error);
  }
};

export const filterPokemonsByName = (name) => ({
  type: FILTER_POKEMONS_BY_NAME,
  payload: name,
});

export const resetPokemons = () => ({
  type: RESET_POKEMONS,
});
