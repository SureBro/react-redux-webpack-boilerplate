import React, { PropTypes } from 'react';

import Header1 from '../../components/headers/Headers';

require('./style.scss');

const App = ({ counter, onIncrement, onDecrement }) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-6 col-xs-offset-3 padding20">
        <div className="col-xs-4">
          <button
            className="btn btn-default center-block"
            onClick={onDecrement}
          >
            -
          </button>
        </div>
        <div className="col-xs-4">
          <Header1
            key="counter-holder"
            text={counter}
            className="text-center margin0 white"
          />
        </div>
        <div className="col-xs-4">
          <button
            className="btn btn-default center-block"
            onClick={onIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default App;

App.propTypes = {
  counter: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};
