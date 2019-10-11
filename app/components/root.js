import React from 'react';
import CandiesContainer from './Candies';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/candies">View Goodie Bag</Link>
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
