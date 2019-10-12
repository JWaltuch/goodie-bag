import React from 'react';
import { connect } from 'react-redux';
import { getSingleCandyFromDatabase, changeQuantity } from '../reducers';

const GET_SINGLE_CANDY = 'GET_SINGLE_CANDY';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

class SingleCandy extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getACandy(this.props.match.params.id);
  }
  handleClick(event) {
    let button = event.target;
    if (this.props.candy.quantity === 10 && button.name === 'increase') {
      button.disabled = true;
    } else if (this.props.candy.quantity === 1 && button.name === 'decrease') {
      button.disabled = true;
    } else {
      this.props.changeCandyQuantity(button.name, this.props.match.params.id);
    }
  }

  render() {
    return (
      <div>
        This is the page for your:
        <h1>{this.props.candy.name}</h1>
        <p>{this.props.candy.description}</p>
        {(this.props.candy.quantity === undefined && (
          <p>This type of candy is all gone! Click a button and get more!</p>
        )) || <p>You have {this.props.candy.quantity} of these in your bag</p>}
        <button
          id="increase"
          type="submit"
          name="increase"
          onClick={event => this.handleClick(event)}
        >
          Get More Candy!
        </button>
        <button
          id="decrease"
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
    changeCandyQuantity: (type, id) => dispatch(changeQuantity(type, id)),
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
