import React from './pages/cadastrar/node_modules/react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import NaoEncontrada  from './pages/naoencontrada';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
//precisa baixar o ngc do npm, aula 9, 1:09:27
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/cadastrar" component={Cadastrar}/>
        <Route component={NaoEncontrada}/>
      </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
