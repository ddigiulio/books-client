import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import {reducer as formReducer} from 'redux-form';
// import protectedDataReducer from './reducers/protected-data';
import profileReducer from './reducers/profile'
import bookReducer from './reducers/book'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import {setAuthToken, refreshAuthToken} from './actions/auth';


const configureStore = (history) => {
    const historyMiddleware = routerMiddleware(history)
    return createStore(
        combineReducers({
            auth: authReducer,
            form: formReducer,
            profile: profileReducer,
            book: bookReducer,
            router: routerReducer
        }), 
        
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk),
        applyMiddleware(historyMiddleware),
    );
}

export default configureStore;
