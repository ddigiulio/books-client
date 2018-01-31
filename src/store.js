import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import {reducer as formReducer} from 'redux-form';
import profileReducer from './reducers/profile'
import bookReducer from './reducers/book'
import searchReducer from './reducers/search'
import { routerMiddleware } from 'react-router-redux'



const configureStore = (history) => {
    const historyMiddleware = routerMiddleware(history)
    return createStore(
        combineReducers({
            auth: authReducer,
            profile: profileReducer,
            form: formReducer,
            book: bookReducer,
            search: searchReducer
        }), 
        
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk),
        applyMiddleware(historyMiddleware),
    );
}

export default configureStore;
