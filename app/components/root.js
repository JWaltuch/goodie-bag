import React from 'react';
import CandiesContainer from './Candies';
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
            <Route exact path="/candies" component={CandiesContainer} />
            <Route
              path="/candies/:id"
              component={() => <SingleCandy id={req.params.id} />}
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Root;
