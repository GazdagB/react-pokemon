import React from 'react'
import '../styles/Pokemon.css'
import { motion } from 'framer-motion'

const Pokemon = ({name,url,imgUrl}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className='pokemon-text-container'>
        <img src={imgUrl} alt="" />
        <h3>{name}</h3>
        <a href={url}>{url}</a>
    </motion.div>
  )
}

export default Pokemon