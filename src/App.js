import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from '../src/Containers/Dashboard/index'
import Listing from '../src/Containers/Listing/index'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path="/products/:id" component={Products}/> */}
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/listing" component={Listing}/>
        </div>
      </Router>
    );
  }
}

export default App;
