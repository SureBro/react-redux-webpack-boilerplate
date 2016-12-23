import { connect } from 'react-redux';

import App from '../components/app/App';

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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
export default AppContainer;
