import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          Mike
        </Route>
        <Route path="/about">Mafalda</Route>
        <Route path="/dashboard">Cenas</Route>
        <Route>404</Route>
      </Switch>
    </BrowserRouter>
  );
};
