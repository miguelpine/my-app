import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Profile } from './profile/profile';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
        <Route path="/about">Mafalda</Route>
        <Route path="/dashboard">Cenas</Route>
        <Route>404</Route>
      </Switch>
    </BrowserRouter>
  );
};
