import React from 'react';
import { connect } from 'react-redux';
import { getCandies } from '../store';

class Candies extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.getCandies();
  }
  render(){
  return({candy.map((candy)=> {(<li>{candy.name}</li>)})})
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(getCandies()),
  };
};

const CandiesConnector = connect(
  null,
  mapDispatchToProps
)(Candies);

export default CandiesConnector;
