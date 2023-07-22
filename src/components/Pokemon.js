import React from 'react'
import '../styles/Pokemon.css'

const Pokemon = ({name,url,imgUrl}) => {
  return (
    <div className='pokemon-text-container'>
        <img src={imgUrl} alt="" />
        <h3>{name}</h3>
        <a href={url}>{url}</a>
    </div>
  )
}

export default Pokemon