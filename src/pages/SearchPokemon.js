import React from 'react';
import LogoText from '../images/pokemon_text.png';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import '../styles/SearchPokemon.css';

import { RiLoader4Fill } from 'react-icons/ri';

const SearchPokemon = () => {
  const [input, setInput] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemonData, setFilteredPokemonData] = useState([]);
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchForPokemon();
    }}

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((res) => {
        const pokemonPromises = res.data.results.map((pokemon) => axios.get(pokemon.url));
        Promise.all(pokemonPromises)
          .then((responses) => {
            const data = responses.map((res) => res.data);
            setPokemonData(data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  const searchForPokemon = () => {
    setSearch(input);
    setIsSearchClicked(true); // Set isSearchClicked to true when the search button is clicked
    if (input.trim() !== '') {
      const filteredData = pokemonData.filter((pokemon) => pokemon.name.includes(input.toLowerCase()));
      setFilteredPokemonData(filteredData);
    }
    
  };

  return (
    <div className='pokemon-search'>
      <div className='search__container'>
        <img src={LogoText} alt='' />
        <h1>Search for a pokemon!</h1>

        <input 
        className='input-search' 
        type='text' 
        value={input} 
        onKeyUp={handleKeyPress} 
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a Pokémon name...'
        />

        <button className='btn btn-search' onClick={searchForPokemon}>
          {isLoading ? (
            <div className='loader'>
              <div className='loading-spinner'>
                <RiLoader4Fill />
              </div>
              <span>Loading</span>
            </div>
          ) : (
            <>
              <FaSearch /> Search
            </>
          )}
        </button>
      </div>

      {
      
      isSearchClicked && filteredPokemonData.length === 0 && input.trim() !== '' ? (
        <div className='no-pokemon-found not-found'>
          <h3><span className="red">No Pokémon</span> found for the search "{search}"</h3>
        </div>
      ) : null}

      {filteredPokemonData.length > 0 ? (
        <div className='results__container'>
          <div className='search-text-container'>
            <h3 className='search-text-container' >Pokémons with the search of "{search}" :</h3>
          </div>

          <div className='pokemon__results'>
            {filteredPokemonData.map((pokemon, idx) => (
              <PokemonCard
                key={idx}
                name={pokemon.name}
                imgUrl={pokemon.sprites.front_default}
                hpNum={pokemon.stats[0].base_stat}
                hp={pokemon.stats[0].stat.name}
                atkNum={pokemon.stats[1].base_stat}
                atk={pokemon.stats[1].stat.name}
                defNum={pokemon.stats[2].base_stat}
                def={pokemon.stats[2].stat.name}
                baseXp={pokemon.base_experience}
              />
            ))}
          </div>
        </div>
      ) : null


      }
    </div>
  );
};

export default SearchPokemon;
