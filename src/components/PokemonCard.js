import React from 'react'
import '../styles/PokemonCard.css'  
import {FcLike} from 'react-icons/fc'
import {TbSword}  from 'react-icons/tb'
import {IoShield} from 'react-icons/io5'
import PokeLogo from '../images/pokemon_text.png'

const PokemonCard = ({name,imgUrl,baseXp,hp,hpNum,atk,atkNum,def,defNum}) => {
  return (
    <div className='result__container' >
        <div className="logo-xp">
            <img src={PokeLogo} alt="" className="poke-logo" />
            <p>{baseXp} <span className="xp-wrapper">Xp</span></p>
        </div>
        <img src={imgUrl} alt="" />
       
            <h3>{name}</h3>
            

        <div className="stats">
            <div className={"stats__hp"} >
            <FcLike/>
            <p>{hpNum}</p>
            </div>

            <div className={"stats__atk"} >
            <TbSword/>
            <p>{atkNum}</p>
            </div>

            <div className={"stats__def"} >
            <IoShield/>
            <p>{defNum}</p>
            </div>
            
    
        </div>
    </div>
  )
}

export default PokemonCard