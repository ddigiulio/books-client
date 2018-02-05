export const AUTHOR_INFO_SUCCESS = 'AUTHOR_INFO_SUCCESS';
export const authorInfoSuccess = author => ({
    type: AUTHOR_INFO_SUCCESS,
    author
});

export const AUTHOR_DELETE_SUCCESS = 'AUTHOR_DELETE_SUCCESS';
export const authorDeleteSuccess = authors => ({
    type: AUTHOR_DELETE_SUCCESS,
    authors
});



export const authorFetchThunk = (param) => (dispatch, getState) => {
    // dispatch(bookFetchLoading())
    const url = `${API_BASE_URL}/authors/authorInfo/${param}`
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
            
            dispatch(authorInfoSuccess(data))
        })
}

export const authorRemoveThunk = (param, history) => (dispatch, getState) => {
    // dispatch(bookFetchLoading())
    const url = `${API_BASE_URL}/authors/deleteAuthor/${param}`
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

            dispatch(authorDeleteSuccess())
            history.push('/profile')
            // dispatch(push('/profile'))
            
        })
}