import React from "react";
import PokemonDetailContainer from "./pokemon_detail_container";
import PokemonIndexItem from "./pokemon_index_item";
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render(){
        return(
            <div className="pokedex">
                <Route path="/pokemon/:id" component={PokemonDetailContainer} />
                <ul>
                {this.props.pokemon.map(pokemon => {
                    return(
                        <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default PokemonIndex;