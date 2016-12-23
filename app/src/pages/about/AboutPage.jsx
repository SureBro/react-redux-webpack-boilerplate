import React from 'react';
import Helmet from 'react-helmet';

import Header1 from '../../components/headers/Headers';

const AboutPage = () => (
  <div className="wrapper">
    <Helmet
      title="About Boilerplate"
      meta={[
        {
          name: 'description',
          content: 'This is a boilerplate project that can be used to start a very scalable web application without wasting the time to setup a project. This boilerplate sets up a tech stack that is very flexible and should be okay for most web applications',
        },
      ]}
    />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Header1
            key="home-header"
            className="text-center text white"
            text="You are on the About Page"
          />
        </div>
      </div>
      <hr />
      <div className="row" style={{ margin: '10px' }}>
        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-1 col-md-offset-3">
          <p className="text white text-center">
            This is a boilerplate project that can be used to start a very scalable web application
            without wasting the time to setup a project. This boilerplate sets up a tech stack that is
            very flexible and should be okay for most web applications
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-1 col-md-offset-3">
          <a className="text green center-block text-center" href="https://github.com/SureBro/react-redux-webpack-boilerplate" target="__blank">
            More on Github
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
