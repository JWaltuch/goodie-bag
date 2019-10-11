import React from 'react';
import { connect } from 'react-redux';
import { getCandyFromDatabase } from '../reducers';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class Candies extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    return (
      <BrowserRouter>
        <ul>
          You Currently Have:
          {this.props.candies.map(candy => {
            return (
              <li key={candy.id}>
                <h3>{candy.name}</h3>
                <div>{candy.description}</div>
              </li>
            );
          })}
        </ul>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(getCandyFromDatabase()),
  };
};

const mapStateToProps = state => {
  return { candies: state.candyReducer.candies };
};

const CandiesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Candies);

export default CandiesConnector;
