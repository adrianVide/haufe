import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import { NotFound } from "./components/NotFound/NotFound";
import { Home } from "./components/Home/Home";
import { User } from "./components/User/User";
import store from "./storeConf";
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={User} />
          <Route exact path='/protected' component={Home} />
          <Route component={NotFound} />
        </Switch>

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
