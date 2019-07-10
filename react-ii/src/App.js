import React, { Component } from 'react';
import './App.css';
import data from './data'
import Name from './components/Name'
import City from './components/City'
import Employer from './components/Employer'
import FavoriteMovies from './components/FavoriteMovies'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currIndex: 0
    }
  }
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <h3>HOME</h3>
        </div>
        <div className='main-content'>
          <Name currIndex={this.state.currIndex} />
          <City currIndex={this.state.currIndex} />
          <Employer currIndex={this.state.currIndex} />
          <FavoriteMovies currIndex={this.state.currIndex} />
        </div>
      </div>

    )
  }
}

export default App