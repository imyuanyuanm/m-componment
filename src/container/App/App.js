import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import routes from '../../routes';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          {routes()}
        </Router>
      </div>
    );
  }
}


