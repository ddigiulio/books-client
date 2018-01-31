import React from 'react';
import ReactDOM from 'react-dom';
import {loadAuthToken} from './local-storage';
import {Provider} from 'react-redux';
import App from './components/app';
import createHistory from 'history/createBrowserHistory'
import configureStore from './store';
import { ConnectedRouter } from 'react-router-redux'
import './index.css';
import {setAuthToken, refreshAuthToken} from './actions/auth';


const history = createHistory()
const store = configureStore(history)

const authToken = loadAuthToken();
if (authToken) {
    store.dispatch(setAuthToken(authToken));
    store.dispatch(refreshAuthToken())
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
