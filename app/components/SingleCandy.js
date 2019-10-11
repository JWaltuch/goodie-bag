import React from 'react';
import { connect } from 'react-redux';
import { getSingleCandyFromDatabase } from '../reducers';

class SingleCandy extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getACandy(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        This is the page for your:
        <h1>{this.props.candy.name}</h1>
        <p>{this.props.candy.description}</p>
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
