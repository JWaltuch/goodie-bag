import React from 'react';
import { connect } from 'react-redux';
import { getSingleCandyFromDatabase } from '../reducers';

class SingleCandy extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getACandy(this.props.match.params.id);
  }
  handleClick(event) {
    if (event.target.name === 'increase') {
      console.log('increase');
    } else if (event.target.name === 'decrease') {
      console.log('decrease');
    }
  }

  render() {
    return (
      <div>
        This is the page for your:
        <h1>{this.props.candy.name}</h1>
        <p>{this.props.candy.description}</p>
        <button
          type="submit"
          name="increase"
          onClick={event => this.handleClick(event)}
        >
          Get More Candy!
        </button>
        <button
          type="submit"
          name="decrease"
          onClick={event => this.handleClick(event)}
        >
          Eat a Candy!
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getACandy: id => dispatch(getSingleCandyFromDatabase(id)),
  };
};

const mapStateToProps = state => {
  return { candy: state.candyReducer.selectedCandy };
};

const SingleCandyConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);

export default SingleCandyConnector;
