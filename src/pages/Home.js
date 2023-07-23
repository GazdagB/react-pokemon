import React from 'react'
import PokeLogo from '../images/pokemon_text.png'

import '../styles/Home.css'
import { FaSearch } from 'react-icons/fa'
import {MdOutlineCatchingPokemon} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

  return (
    <motion.div 
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{opacity: 0}}
    transition={{duration: 0.3}}
    className='home'>
        <div className='home__hero'>
            
            <img onClick={()=> navigate("/all-pokemon")} src={PokeLogo} alt="" />
            <div className="buttons-container">

                <Link to='/all-pokemon' className='btn'>

                <MdOutlineCatchingPokemon className='icon-pokemon' />
                All Pokemons</Link>

                <Link to='/search-pokemon' className='btn'>

                <FaSearch className='icon-search'/>
                Search Pokemons</Link>
            </div>
        </div>
    </motion.div>
  )
}

export default Home