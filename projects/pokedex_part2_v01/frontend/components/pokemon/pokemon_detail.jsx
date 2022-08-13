import React from "react";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) this.props.requestSinglePokemon(this.props.match.params.id)
  }

  render() {
    const { pokemon, moves, items } = this.props;
    debugger
    return (
        pokemon.name ? <div className="pokemon-detail">
          <h2>{pokemon.name}</h2>
          <h2>Pokemon Moves</h2>
          <ul>
            {moves.map(move => {
              return (
                <li>{move.name}</li>
              )
            })}
          </ul>
          <h2>Pokemon Items</h2>
          <ul>
            {items.map(item => {
              return (
                <li>{item.name}</li>
              )
            })}
          </ul>
        </div> : <div>Nada</div>
    )
  }
}

export default PokemonDetail;