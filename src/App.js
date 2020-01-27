import React, {Component} from 'react';
import PlayersContainer from './containers/PlayersContainer.js';
import CoachesContainer from './containers/CoachesContainer.js';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
/*
import './App.css' from './';
*/
class App extends Component {


    constructor() {
      super();

      this.state = {};
  }


render() {

  return (
    <div className="App">
  {/*}      <NavBar />

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      Learn React
        </a>

      </header>





      <Route exact path='/players/new' component={PlayersContainer} />
      */}

      <PlayersContainer />

      <CoachesContainer />



    </div>
    );
  }
}

export default App;
