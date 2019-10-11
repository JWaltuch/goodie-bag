import React from 'react';
import { connect } from 'react-redux';
import { getCandyFromDatabase } from '../reducers';

class Candies extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('mounting');
    this.props.getCandies();
  }

  render() {
    return (
      <ul>
        {this.props.candies.map(candy => {
          return (
            <li key={candy.id}>
              {candy.name}
              <div>{candy.description}</div>
            </li>
          );
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
  return { candies: state.candyReducer.candies };
};

const CandiesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Candies);

export default CandiesConnector;
