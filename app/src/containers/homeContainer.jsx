import { connect } from 'react-redux';

import HomePage from '../pages/home/HomePage';

import { incrementCounter, decrementCounter } from '../actions/counter/actions';

const mapStateToProps = state => ({
  counter: state.toString(),
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch(incrementCounter());
  },
  onDecrement: () => {
    dispatch(decrementCounter());
  },
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
export default HomePageContainer;
