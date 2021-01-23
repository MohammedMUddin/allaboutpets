import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    {/* Important to wrap root (highest) 
        level of app in <Router> to use 
        react router object     
    */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
