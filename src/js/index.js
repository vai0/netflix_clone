import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

ReactDOM.render(
  <App />,
  document.getElementById('container')
);

window.app = ReactDOM.render(React.createElement(App, {}), document.getElementById('container'));
