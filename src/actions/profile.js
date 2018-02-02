// import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from './utils';

export const CURRENT_BOOK_SUCCESS = 'CURRENT_BOOK_SUCCESS';
export const currentBookSuccess = book => ({
    type: CURRENT_BOOK_SUCCESS,
    book
});

export const CURRENT_BOOK_SEARCH_RESULTS = 'CURRENT_BOOK_SEARCH_RESULTS';
export const currentBookSearchResult = books => ({
    type: CURRENT_BOOK_SEARCH_RESULTS,
    books
}) 

export const TOP_BOOK_SEARCH_RESULTS = 'TOP_BOOK_SEARCH_RESULTS';
export const topBookSearchResult = books => ({
    type: TOP_BOOK_SEARCH_RESULTS,
    books
})

export const TOP_AUTHOR_SEARCH_RESULTS = 'TOP_AUTHOR_SEARCH_RESULTS';
export const topAuthorSearchResult = authors => ({
    type: TOP_AUTHOR_SEARCH_RESULTS,
    authors
}) 

export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const clearSearch = () => ({
    type: CLEAR_SEARCH
})
export const CURRENT_BOOK_LOADING = 'CURRENT_BOOK_SUCCESS';
export const currentBookLoading = () => ({
    type: CURRENT_BOOK_LOADING
});

export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
export const updateBookSuccess = book => ({
    type: UPDATE_BOOK_SUCCESS,
    book
});

export const UPDATE_TOP_AUTHOR_SUCCESS = 'UPDATE_TOP_AUTHOR_SUCCESS';
export const updateTopAuthorSuccess = author => ({
    type: UPDATE_TOP_AUTHOR_SUCCESS,
    author
});


export const CURRENT_BOOK_FAILURE = 'CURRENT_BOOK_FAILURE';
export const currentBookFailure = () => ({
    type: CURRENT_BOOK_FAILURE
});

export const TOP_BOOKS_SUCCESS = 'TOP_BOOKS_SUCCESS';
export const topBooksSuccess = books => ({
    type: TOP_BOOKS_SUCCESS,
    books
});

export const TOP_AUTHOR_SUCCESS = 'TOP_AUTHOR_SUCCESS';
export const topAuthorSuccess = authors => ({
    type: TOP_AUTHOR_SUCCESS,
    authors
});

export const RECOMMENDATION_SUCCESS = 'RECOMMENDATION_SUCCESS';
export const recommendationSuccess = book => ({
    type: RECOMMENDATION_SUCCESS,
    book
});

export const currentBookThunk = (param, history) => (dispatch, getState) => {
    // dispatch(currentBookLoading())
    const url = "http://localhost:8080/books/currentlyReading/" + param
    const authToken = getState().auth.authToken;
    return fetch(url, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then( data => {
            
            dispatch(currentBookSearchResult(data))

        })
}

export const addCurrentBookThunk = (param, history) => (dispatch, getState) => {
    
    const url = "http://localhost:8080/books/currentlyReadingAdd/" + param
    const authToken = getState().auth.authToken;
    return fetch(url, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },

    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then( data => {
           
            dispatch(currentBookSuccess(data))
            dispatch(clearSearch())
            history.push('/profile')
        })
}

export const updateBookPage = (currentBook) =>(dispatch, getState) =>{

    dispatch(updateBookSuccess(currentBook))
}

export const getCurrentlyReading = () => (dispatch, getState) => {

    const fetched= getState().profile.currentlyReading.fetched;
    if (fetched && (Date.now() - fetched) < 3600) {
        return;
    }
    const authToken = getState().auth.authToken;
    const url = "http://localhost:8080/books/currentlyReading"
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then( data  => {     
            dispatch(currentBookSuccess(data))      
        })
        .catch(err => {
            
        });
}

export const topBooksThunk = (param, history) => (dispatch, getState) => {

    const url = "http://localhost:8080/books/topBooks/" + param
    const authToken = getState().auth.authToken;
    return fetch(url, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then( data => {
        
            dispatch(topBookSearchResult(data))
           
        })

}

export const addTopBookThunk = (param, history) => (dispatch, getState) => {
    
    const url = "http://localhost:8080/books/topBookAdd/" + param
    const authToken = getState().auth.authToken;
    return fetch(url, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },

    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then( data => {
            dispatch(topBooksSuccess(data))
            dispatch(clearSearch())
            history.push('/profile')

        })
}
export const getTopBooks = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = "http://localhost:8080/books/topBooks"
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then( data  => {
            
            dispatch(topBooksSuccess(data))
        })
        .catch(err => {
          
        });
}


export const topAuthorThunk = (param, history) => (dispatch, getState) => {
    // dispatch(currentBookLoading())
 
    const url = "http://localhost:8080/authors/" + param
    const authToken = getState().auth.authToken;
    return fetch(url, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then( data => {

            dispatch(topAuthorSearchResult(data))
        })
}

export const updateTopAuthor = (currentAuthor) =>(dispatch, getState) =>{

    dispatch(updateTopAuthorSuccess(currentAuthor))
}

export const addTopAuthorThunk = (param, history) => (dispatch, getState) => {
    
    //param is ID
  
    const url = "http://localhost:8080/authors/topAuthorAdd/" + param
    const authToken = getState().auth.authToken;
    return fetch(url, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then( data => {
         
            dispatch(topAuthorSuccess(data))
            dispatch(clearSearch())
            history.push('/profile')

        })
}
export const getTopAuthors = () => (dispatch, getState) => {

    const authToken = getState().auth.authToken;
    const url = "http://localhost:8080/authors/topAuthors"
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then( data  => {
            
            dispatch(topAuthorSuccess(data))
        })
        .catch(err => {
          
        });
}

// export const recommendationThunk = (param) => (dispatch) => {
//     // dispatch(currentBookLoading())
//     const url = "http://localhost:8080/books/" + param
//     fetch(url)
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .then(data => {

//             const result = data.GoodreadsResponse.search[0].results[0].work[0].best_book[0]
//             const book = {
//                 author: result.author[0].name[0],
//                 title: result.title[0],
//                 imageSrc: result.image_url[0],
//                 imageSrcSmall: result.small_image_url[0]
//             }

//             dispatch(recommendationSuccess(book));
//         })
//         .catch(err => { console.log(err) }
//         // dispatch(currentBookFailure())}
//         );
// }
