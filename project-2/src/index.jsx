import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './templates/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Abc from './templates/Abc';
import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/abc/:slug?/:id?" component={Abc} exact />
    </Switch>
  </BrowserRouter>,
);
