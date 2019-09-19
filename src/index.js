import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import { MyProvider } from './Context';

ReactDOM.render(
  <MyProvider> 
    <Router> 
      <App /> 
    </Router> 
  </MyProvider>, 
  document.getElementById('root')
);

serviceWorker.unregister();


