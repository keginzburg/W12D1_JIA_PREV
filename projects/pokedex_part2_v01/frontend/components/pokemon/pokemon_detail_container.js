import { connect } from "react-redux";
import { requestSinglePokemon } from "../../actions/pokemon_actions";
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.id],
    moves: Object.values(state.entities.moves),
    items: Object.values(state.entities.items)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePokemon: pokemonId => dispatch(requestSinglePokemon(pokemonId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);