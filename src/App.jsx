import React from 'react';
import Explore from './views/Explore';
import SingleArticle from './components/SingleArticle'
import './app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  debugger
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Explore />
        </Route>
        <Route path='/articles/:id'>
          <SingleArticle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
