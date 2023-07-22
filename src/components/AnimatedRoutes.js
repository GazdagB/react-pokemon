import React from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom';

//Pages
import AllPokemons from '../pages/AllPokemons';
import SearchPokemon from '../pages/SearchPokemon';
import Home from '../pages/Home';

import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/all-pokemon" element={<AllPokemons />} />
    <Route path="/search-pokemon" element={<SearchPokemon />} />
 </Routes>
  )
}

export default AnimatedRoutes