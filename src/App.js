import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
//import {Route} from 'react-router-dom'
import './App.css'
import DashboardContainer from './components/Dashboard/DashboardContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        Hi there, let's get started!
        < DashboardContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;