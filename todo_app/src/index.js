import React from 'react';
import ReactDOM from 'react-dom';
import './Googlekeeps.css';
import GoogleKeeps from './Googlekeeps'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <GoogleKeeps />
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
