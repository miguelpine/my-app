import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Profile } from './profile/profile';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">Mafalda</Route>
        <Route path="/dashboard">Cenas</Route>
        <Route exact path="/" component={Profile} />
        <Route path="*" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};
