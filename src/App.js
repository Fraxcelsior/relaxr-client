import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
//import {Route} from 'react-router-dom'
import './App.css'
import JournalContainer from './components/Journal/JournalContainer';
import Routing from './components/Routing';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routing />
        </div>
      </Provider>
    );
  }
}

export default App;