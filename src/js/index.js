import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'css/index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('container')
);

// reveal app methods to window for testing
window.app = ReactDOM.render(React.createElement(App, {}), document.getElementById('container'));
