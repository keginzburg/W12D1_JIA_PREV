import React from "react";
import { Link } from 'react-router-dom';


const PokemonIndexItem = ({pokemon}) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <li>
        {pokemon.id} <img src={pokemon.imageUrl} width="22" height="22" alt="Pokemon Sprite" /> {pokemon.name}
      </li>
    </Link>
  )
}

export default PokemonIndexItem;