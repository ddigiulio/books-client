// import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const CURRENT_BOOK_SUCCESS = 'CURRENT_BOOK_SUCCESS';
export const currentBookSuccess = book => ({
    type: CURRENT_BOOK_SUCCESS,
    book
});

export const CURRENT_BOOK_LOADING = 'CURRENT_BOOK_SUCCESS';
export const currentBookLoading = () => ({
    type: CURRENT_BOOK_LOADING
});


export const CURRENT_BOOK_FAILURE = 'CURRENT_BOOK_FAILURE';
export const currentBookFailure = () => ({
    type: CURRENT_BOOK_FAILURE
});

export const TOP_BOOK_SUCCESS = 'TOP_BOOK_SUCCESS';
export const topBookSuccess = book => ({
    type: TOP_BOOK_SUCCESS,
    book
});

export const TOP_AUTHOR_SUCCESS = 'TOP_AUTHOR_SUCCESS';
export const topAuthorSuccess = author => ({
    type: TOP_AUTHOR_SUCCESS,
    author
});

export const RECOMMENDATION_SUCCESS = 'RECOMMENDATION_SUCCESS';
export const recommendationSuccess = book => ({
    type: RECOMMENDATION_SUCCESS,
    book
});

export const currentBookThunk = (param) => (dispatch, getState) => {
    // dispatch(currentBookLoading())
    const url = "http://localhost:8080/books/" + param 
    const authToken = getState().auth.authToken;
    return fetch(url, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })

}

export const getCurrentlyReading = () => (dispatch, getState) =>{
    const authToken = getState().auth.authToken;
    const url = "http://localhost:8080/books/currentlyReading" 
    return fetch(url, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => 
        // dispatch(fetchProtectedDataSuccess(data)))
        console.log(data)
        )
        .catch(err => {
            // dispatch(fetchProtectedDataError(err));
        });
}

// export const topBookThunk = (param) => (dispatch) => {
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
         
//             dispatch(topBookSuccess(book));
//         }
//         )
//         .catch(err => console.log(err)
//         // dispatch(currentBookFailure())}
//         );
// }

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

// export const topAuthorThunk = (param) => (dispatch) => {
//     // dispatch(currentBookLoading())
//     const url = "http://localhost:8080/author/" + param
//     fetch(url)
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .then(data => {
//             const result = data.GoodreadsResponse.author[0]
//             const author = {
//                 name: result.name[0],
//                 imageSrc: result.image_url[0],
//                 imageSrcSmall: result.small_image_url[0]
//             }

//             dispatch(topAuthorSuccess(author));
//         }
//         )
//         .catch(err => console.log(err)
//         // dispatch(currentBookFailure())}
//         );
// }