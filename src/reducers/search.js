import * as actions from '../actions/search';

const initialState = {
    searchResult: {

    }
}

export default function reducer (state=initialState, action) {
    
    if(action.type === actions.SEARCH_SUCCESS){
        return Object.assign({}, state, {
            searchResult: {
                username: action.result[0].username,
                firstname: action.result[0].firstName,
                lastname: action.result[0].lastName,
                topBooks: action.result[0].topBooks,
                currentlyReading: action.result[0].currentlyReading     
            }
        });
        
    }
    else if (action.type ===actions.SEARCH_EMPTY){
        return Object.assign({}, state, {
            searchResult: false
        });
    }
    return state;
}