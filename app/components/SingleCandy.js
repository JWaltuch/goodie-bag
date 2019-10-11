import React from 'react';
import { connect } from 'react-redux';
import { getSingleCandyFromDatabase } from '../reducers';

class SingleCandy extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.match);
    this.props.getACandy(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.candy.name}</h3>
        <div>{this.props.candy.description}</div>
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
