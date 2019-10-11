import React from 'react';
import CandiesContainer from './Candies';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>Goodie Bag</nav>
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
