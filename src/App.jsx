import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import PeopleTable from './components/PeopleTable/PeopleTable';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';

import './App.scss';

const App = () => (
  <>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/table" exact>
        <PeopleTable />
      </Route>

      <Redirect path="/home" to="/" exact />
      <PageNotFound />
    </Switch>
  </>
);

export default App;
