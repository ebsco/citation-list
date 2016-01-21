/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

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

const finalCreateStore = compose(
	applyMiddleware(
		// MIDDLEWARES GO 'ERE
	),
	DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);

// import { updateText } from './actions/actions.js';
// store.dispatch(updateText('ahoy!'));

const Main = (
	<Provider store={store}>
		<div>
			<App className='foo' />
			<DevTools />
		</div>
	</Provider>
);

ReactDOM.render(Main, document.getElementById('app'));
