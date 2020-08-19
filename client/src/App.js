import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import characters from './characters.json'

class App extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {

    return (
      <div className="App">
        <Navbar count={this.state.count} handleIncrement={this.handleIncrement} />
      </div>
    );
  }



}

export default App;
