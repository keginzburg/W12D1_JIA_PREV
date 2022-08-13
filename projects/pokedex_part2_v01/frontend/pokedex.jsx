import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root.jsx';
import { requestSinglePokemon } from "./actions/pokemon_actions"


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.requestSinglePokemon = requestSinglePokemon;
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"))
})