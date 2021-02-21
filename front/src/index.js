import React from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { Home } from "./components/Home/Home";
import { User } from "./components/User/User";
import store from "./storeConf";
import './index.css';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <Route exact path='/' component={User} />
      <Route exact path='/protected' component={Home} />

    </Provider> 
  </React.StrictMode>
 </BrowserRouter>  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
