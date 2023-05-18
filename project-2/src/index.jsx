import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './templates/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
);
