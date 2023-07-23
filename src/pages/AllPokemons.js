import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from '../components/Pokemon';
import '../styles/AllPokemons.css';

import { motion } from 'framer-motion'

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [images, setImages] = useState([]);

  function fetchPokemons() {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => setPokemons(response.data.results))
      .catch((error) => {
        console.error('Error fetching pokemons:', error.message);
      });
  }

  useEffect(() => { 
    fetchPokemons();
  }, [pokemons]);

  
  return (
    <motion.div 
    initial={{x: '-100vw'}}
    animate={{x: 0}}
    exit={{x: '100vw'}}
    transition={{duration: 0.3}}
    className='all-pokemon'>
      <div className='modal'>
        <h2>All the Pokemons</h2>
        {
        pokemons.map((pokemon, index) => (
          <Pokemon key={index} name={pokemon.name} url={pokemon.url} imgUrl={images[index]} />
        ))}
      </div>
    </motion.div>
  );
};

export default AllPokemons;
