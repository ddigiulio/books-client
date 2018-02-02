import * as actions from '../actions/search';

const initialState = {
    searchResult: {

    }
}

export default function reducer (state=initialState, action) {
    
    if(action.type === actions.SEARCH_SUCCESS){
        // console.log(action)
        return Object.assign({}, state, {
            searchResult: {
                username: action.result.username,
                firstname: action.result.firstName,
                lastname: action.result.lastName,
                topBooks: action.result.topBooks,
                currentlyReading: action.result.currentlyReading  ,
                topAuthors: action.result.topAuthors  
            }
        });
        
    }
    else if (action.type ===actions.SEARCH_EMPTY){
        return Object.assign({}, state, {
            searchResult: false
        });
    }
    else if (action.type === actions.CLEAR_SEARCH){
        return Object.assign({}, state, {
            searchResult: ""
        });
    }
    return state;
}