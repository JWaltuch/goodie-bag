import React from 'react';
import CandiesConnector from './Candies';
import SingleCandyConnector from './SingleCandy';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/candies" className="navlink">
            View Goodie Bag
          </NavLink>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Switch>
            <Route exact path="/candies" component={CandiesConnector} />
            <Route path="/candies/:id" component={SingleCandyConnector} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Root;
