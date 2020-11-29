import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

export default class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      countButton: 0,
    }

    this.passPokemon = this.passPokemon.bind(this);
  }

  passPokemon() {
    if(this.state.countButton < 8) {
      this.setState((oldState, _props) => ({
        countButton: oldState.countButton + 1,
      }));
    } else {
      this.setState({
        countButton: 0,
      })
    }
  }

  render() {
    let count = this.state.countButton;
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={pokemons[count].name} pokemon={pokemons[count]} />
        </div>
        <button onClick={this.passPokemon}>Pass Pokemon</button>
      </div>
    )
  }
}
