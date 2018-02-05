import {API_BASE_URL} from '../config';

export const BOOK_INFO_SUCCESS = 'BOOK_INFO_SUCCESS';
export const bookInfoSuccess = book => ({
    type: BOOK_INFO_SUCCESS,
    book
});

export const BOOK_DELETE_SUCCESS = 'BOOK_DELETE_SUCCESS';
export const bookDeleteSuccess = books => ({
    type: BOOK_DELETE_SUCCESS,
    books
});



export const bookFetchThunk = (param) => (dispatch, getState) => {
    // dispatch(bookFetchLoading())
    const url = `${API_BASE_URL}/books/bookInfo/${param}`
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
            
            dispatch(bookInfoSuccess(data))
        })
}

export const bookRemoveThunk = (param, history) => (dispatch, getState) => {
    // dispatch(bookFetchLoading())

    const url = `${API_BASE_URL}/books/deleteBook/${param}`
    const authToken = getState().auth.authToken;
    return fetch(url, {
        method: 'DELETE',
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
            dispatch(bookDeleteSuccess())
            history.push('/profile')
            // dispatch(push('/profile'))
            
        })
}