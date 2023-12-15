import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokemonsByName } from "../../redux/actions";
import { resetPokemons } from "../../redux/actions";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(filterPokemonsByName(searchTerm));
  };
  const handleReset = () => {
    dispatch(resetPokemons());
  };

  return (
    <div className="containerSearch">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn-search" onClick={handleSearch}>
        Search
      </button>
      <button className="btn-reset" onClick={handleReset}>
        Reset Pokemons
      </button>
    </div>
  );
};

export default Search;
