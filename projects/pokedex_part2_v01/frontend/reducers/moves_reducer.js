import { RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";

const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      let moves = Object.values(action.pokemon.moves);
      moves.forEach(move => {
        nextState[move.id] = move;
      });
      return nextState;
    default:
      return state;
  }
}

export default movesReducer;
