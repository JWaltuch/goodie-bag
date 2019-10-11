import React from 'react';
import { connect } from 'react-redux';
import { getCandyFromDatabase } from '../reducers';

class Candies extends React.Component {
  constructor({ candies }) {
    super(candies);
  }
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    return (
      <ul>
        {this.candies &&
          this.candies.map(candy => {
            <li>{candy.name}</li>;
          })}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(getCandyFromDatabase()),
  };
};

const mapStateToProps = state => {
  return { candies: state.candies };
};

const CandiesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Candies);

export default CandiesConnector;
