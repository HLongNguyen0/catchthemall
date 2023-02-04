import { Component } from "react";
import Form from "./Form/Form";

class App extends Component {
  state = {
    pokemon: "",
  };

  handleSumbit = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((res) => this.setState({ pokemon: res }));
  };

  render() {
    const { name, sprites } = this.state.pokemon;
    return (
      <section>
        <Form handleSumbit={this.handleSumbit} />
        {this.state.pokemon && (
          <>
            <h2>{name}</h2>
            <img
              src={sprites.other["official-artwork"].front_default}
              alt="pokemonImg"
            />
          </>
        )}
      </section>
    );
  }
}
export default App;
