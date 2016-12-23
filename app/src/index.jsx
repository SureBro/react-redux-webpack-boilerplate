import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'jquery';
import 'bootstrap-loader';

import store from './stores/counter/counterStore';

import App from './containers/appContainer';

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>
    , app);
}

main();
