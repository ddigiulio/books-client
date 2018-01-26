import * as actions from '../actions/book';

const initialState = {
    currentBook: {

    }
}

export default function reducer (state=initialState, action) {
    
    if(action.type === actions.BOOK_INFO_SUCCESS){
        return Object.assign({}, state, {
            currentBook: {
                id: action.book._id,
                title: action.book.title,
                author: action.book.author,
                imageSrc: action.book.imageSrc,
                description: action.book.description ,
                rating: action.book.rating,
                pubYear: action.book.pubYear,
                pubMonth: action.book.pubMonth           
            }
        });
    }
    else if (action.type ===actions.BOOK_DELETE_SUCCESS){
        return Object.assign({}, state, {
            currentBook: {                    
            }
        });
    }
    return state;
}