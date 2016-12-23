import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap-loader';

import App from './components/app/App';

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}

main();
