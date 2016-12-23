import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import Header1 from '../../components/headers/Headers';

const HomePage = ({ counter, onIncrement, onDecrement }) => (
  <div className="wrapper">
    <Helmet
      title="Home Boilerplate"
      meta={[
        {
          name: 'description',
          content: 'The data is managed by Redux and React is mainly to display view. We do not use React\'s state to store information. Information is passed through props',
        },
      ]}
    />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Header1
            key="home-header"
            className="text-center text white"
            text="You are on the Home Page"
          />
        </div>
      </div>
      <hr />
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
  </div>
);

HomePage.propTypes = {
  counter: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

export default HomePage;
