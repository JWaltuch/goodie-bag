import React from 'react';
import { connect } from 'react-redux';
import { getCandies } from '../store';

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
        {candies.map(candy => {
          <li>{candy.name}</li>;
        })}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(getCandies()),
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
