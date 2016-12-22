import React from 'react';
import { connect } from 'react-redux';

import Header1 from '../../components/headers/header1';
import counterStore from '../../stores/counter/counterStore';

require('./style.scss');

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-6 col-xs-offset-3 padding20">
        <div className="col-xs-4">
          <button
            className="btn btn-default center-block"
            onClick={
              () => counterStore.dispatch({
                type: 'DECREMENT',
              })
            }
          >
            -
          </button>
        </div>
        <div className="col-xs-4">
          <Header1
            key="counter-holder"
            text={counterStore.getState().toString()}
            className="text-center margin0"
          />
        </div>
        <div className="col-xs-4">
          <button
            className="btn btn-default center-block"
            onClick={
              () => counterStore.dispatch({
                type: 'INCREMENT',
              })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default App;
