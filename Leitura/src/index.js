import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import middlewares from './middlewares';
import App from './components/App'

const store = createStore(reducers, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);