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
    recommendations: [{}]

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
    // else if (action.type === actions.TOP_AUTHOR_SUCCESS) {

    //     return Object.assign({}, state, {
    //         topAuthors: [...state.topAuthors, {
    //             name: action.author.name,
    //             imageSrc: action.author.imageSrc
    //         }]
    //     });
    // }
    // else if (action.type === actions.RECOMMENDATION_SUCCESS) {
    //     return Object.assign({}, state, {
    //         recommendations: [...state.recommendations, {
    //             author: action.book.author,
    //             title: action.book.title,
    //             imageSrc: action.book.imageSrc,
    //             imageSrcSmall: action.book.imageSrcSmall
    //         }]
    //     })
    // }

    return state;
};