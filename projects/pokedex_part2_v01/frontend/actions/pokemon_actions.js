import * as APIUtil from "../util/api_util";

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => {
  return APIUtil.fetchSinglePokemon(id)
      .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
}

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const receiveSinglePokemon = pokemon => {
  return {
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
  }
}