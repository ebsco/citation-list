/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { Router, Route, IndexRoute } from 'react-router';

import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';

// Redux Devtools
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

// Redux Store setup
const finalCreateStore = compose(
  applyMiddleware(
    // MIDDLEWARES GO 'ERE
  ),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);

// Routing
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
const router = (
  <Router history={ history }>
    <Route path="/">
      <IndexRoute component={App} />
    </Route>
  </Router>
);

// Root component
const Main = (
  <Provider store={store}>
    <div>
      { router }
      <DevTools />
    </div>
  </Provider>
);

ReactDOM.render(Main, document.getElementById('app'));
