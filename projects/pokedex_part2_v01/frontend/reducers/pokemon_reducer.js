import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      
      return Object.assign(nextState, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      debugger
      nextState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return nextState;
    default:
      
      return state;
  }
}

export default pokemonReducer;