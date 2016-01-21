/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

import { createStore } from 'redux';
import reducer from './reducers/reducer';


var store = createStore(reducer);

// import { updateText } from './actions/actions.js';
// store.dispatch(updateText('ahoy!'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
