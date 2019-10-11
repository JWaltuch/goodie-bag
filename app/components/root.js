import React from 'react';
import CandiesContainer from './Candies';

const candies = [];

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <CandiesContainer candies={candies} />
      </main>
    </div>
  );
};

export default Root;
