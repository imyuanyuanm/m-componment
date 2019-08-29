import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './container';
import * as serviceWorker from './serviceWorker';

// if you wanna use VW, you can open below codes
// let hacks = require('viewport-units-buggyfill.hacks');
// require('viewport-units-buggyfill').init({
//   hacks: hacks
// });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
