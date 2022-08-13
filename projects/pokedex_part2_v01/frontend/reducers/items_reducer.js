import { RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      let items = Object.values(action.pokemon.items);
      items.forEach(item => {
        nextState[item.id] = item;
      })
      return nextState;
    default:
      return state;
  }
}

export default itemsReducer;