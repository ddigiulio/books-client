import * as actions from '../actions/profile';

const initialState = {

    currentlyReading: {
        currentBookLoading: false,
        error: null
    },
    topBooks: [{
    }],
    topAuthors: [{

    }],
    recommendations: [{

    }],
    searchResults: [{

    }],
    currentBook:{},
    currentAuthor:{}


};

export default function reducer (state = initialState, action) {
    // if (action.type === actions.CURRENT_BOOK_LOADING){

    //     return Object.assign({}, state, {
    //         currentlyReading: {
    //             currentBookLoading: true,
    //             error: null
    //         }
    //     })
    // }
    if (action.type === actions.CURRENT_BOOK_SUCCESS) {

        return Object.assign({}, state, {
            currentlyReading: {
                id: action.book._id,
                title: action.book.title,
                author: action.book.author,
                imageSrc: action.book.imageSrc,
                description: action.book.description,
                rating: action.book.rating,
                pubYear: action.book.pubYear,
                pubMonth: action.book.pubMonth,
                fetched: Date.now()
            }
        });
    }
    else if (action.type === actions.TOP_BOOKS_SUCCESS) {

        return Object.assign({}, state, {
            topBooks: action.books
        });
    }
    else if (action.type === actions.CURRENT_BOOK_SEARCH_RESULTS) {

        return Object.assign({}, state, {
            searchResults: action.books
        });
    }
    else if (action.type === actions.TOP_BOOK_SEARCH_RESULTS) {

        return Object.assign({}, state, {
            searchResults: action.books
        });
    }
    else if (action.type === actions.TOP_AUTHOR_SEARCH_RESULTS) {

        return Object.assign({}, state, {
            searchResults: action.authors
        });
    }
    else if (action.type === actions.CLEAR_SEARCH){
        return Object.assign({}, state, {
            searchResults: ""
        });
    }
    else if (action.type === actions.UPDATE_BOOK_SUCCESS) {

        return Object.assign({}, state, {
            currentBook: {
                index: action.book[0].index,
                title: action.book[0].title,
                id: action.book[0].bookID,
                author: action.book[0].author.name[0],
                imageSrc: action.book[0].imageSrc,
                rating: action.book[0].rating,
                pubYear: action.book[0].pubYear,     
            }
        });
    }
    else if (action.type === actions.UPDATE_TOP_AUTHOR_SUCCESS) {

        
        return Object.assign({}, state, {
            currentAuthor: {
                id: action.author[0].id,
                name: action.author[0].name,
                imageSrc: action.author[0].imageSrc,
                   
            }
        });
    }
    // else if (action.type === actions.UPDATE_CURRENT_SUCCESS_ONE){
    //     console.log(action)
    // }

    else if (action.type === actions.TOP_AUTHOR_SUCCESS) {

        return Object.assign({}, state, {
            topAuthors: action.authors
        });
    }
 
    return state;
};