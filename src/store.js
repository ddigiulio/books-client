import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import {reducer as formReducer} from 'redux-form';
// import protectedDataReducer from './reducers/protected-data';
import profileReducer from './reducers/profile'
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        auth: authReducer,
        form: formReducer,
        profile: profileReducer
    }), 
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
