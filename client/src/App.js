import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import characters from './characters.json'
import Character from './components/Character'

class App extends React.Component {
  state = {
    characters: characters,
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {

    return (
      <div className="App">
        <Navbar count={this.state.count} handleIncrement={this.handleIncrement} />
        <div className="row">
          {this.state.characters.map(character => (
            <Character
              id={character.id}
              image={character.image}
              key={character.name}
              handleIncrement={this.handleIncrement}
            />
          ))}
        </div>
      </div>
    );
  }



}

export default App;
