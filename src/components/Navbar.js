import React, { useState } from 'react'
import '../styles/Navbar.css'
import Hamburger from 'hamburger-react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

//Import Logo 
import LogoText from '../images/pokemon_text.png'
import { Link } from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'
import { GiHamburgerMenu} from 'react-icons/gi'

//Import Icons
import { FaHome, FaSearch} from 'react-icons/fa'
import {MdOutlineCatchingPokemon} from 'react-icons/md'


const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 975) {
      setOpen(false); // Close the hamburger menu on bigger screens
    }
  }, [windowWidth]);

  return (
    <>
    
    <div className='navbar'>
      <div className="navbar__logo">
        <Link className='logo__link' to='/'>
          <img className='logo__text' src={LogoText} alt="" />
        </Link>
      </div>

      {windowWidth <= 1200 && (
        <Hamburger toggled={isOpen} toggle={setOpen} className="hamburger__icon" />
      )}

      <ul className={`navbar__links linksHidden`}>
        <li>
          <FaHome className='icon-home' />
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <MdOutlineCatchingPokemon className='icon-pokemon' />
          <Link to={"/all-pokemon"}>All Pokemons</Link>
        </li>

        <li>
          <FaSearch className='icon-search'/>
          <Link to={"/search-pokemon"}>Search Pokemon</Link>
        </li>
      </ul>
    </div>
    
    {isOpen &&(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="mobile__menu">
        <ul className={`navbar__links`}>
        <li onClick={() => setOpen(false)}>
          <FaHome className='icon-home' />
          <Link to={"/"}>Home</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <MdOutlineCatchingPokemon className='icon-pokemon' />
          <Link to={"/all-pokemon"}>All Pokemons</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <FaSearch className='icon-search'/>
          <Link to={"/search-pokemon"}>Search Pokemon</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <AiFillCloseCircle className='close-icon' onClick={()=> setOpen(false)}/>
        </li>
      </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;