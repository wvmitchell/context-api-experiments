import React, { Component } from 'react';
import FruitContext from './context'
import FruitCards from './FruitCards'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    const data = {
      apples: 10,
      oranges: 15,
    }

    const actions = {
      addFruit: this.addFruit,
      removeFruit: this.removeFruit
    }

    this.state = {...data, ...actions}
  }

  addFruit = (name) => {
    this.setState(state => ({
      [name]: state[name] + 1
    }))
  }

  removeFruit = (name) => {
    this.setState(state => ({
      [name]: state[name] - 1 
    }))
  }

  render() {
    const { Provider } = FruitContext

    return (
      <Provider value={this.state}>
        <FruitCards />
      </Provider>
    );
  }
}

export default App;
