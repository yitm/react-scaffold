import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';

class App extends Component {
  render() {
    console.log(this)
    return (
      <div className="App">
        <header className="App-header">
          <a href="/about"><img src={logo} className="App-logo" alt="logo" /></a>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(
  state => ({name: state}),
  { }
)(App)
