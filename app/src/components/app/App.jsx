import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import HomePageContainer from '../../containers/homeContainer';
import AboutPage from '../../pages/about/AboutPage';

import Navbar from '../../components/navbar/Navbar';

import store from '../../stores/counter/counterStore';

require('./style.scss');

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'About',
    url: '/about',
  },
];

const Layout = props => (
  <div>
    <Navbar key="navbar" links={links} />
    {
      props.children
    }
  </div>
);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePageContainer} />
        <Route path="/about" component={AboutPage} />
      </Route>
    </Router>
  </Provider>
);

export default App;
