import React from 'react';
import Explore from './views/Explore';
import SingleArticle from './components/SingleArticle'
import './app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetLocal from './views/GetLocal';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <GetLocal />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route path='/articles/:id'>
            <SingleArticle />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
