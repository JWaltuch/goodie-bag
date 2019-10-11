import React from 'react';
import CandiesContainer from './Candies';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

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
          <Route path="/candies" component={CandiesContainer} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Root;
