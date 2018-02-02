export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const searchSuccess = result => ({
    type: SEARCH_SUCCESS,
    result
});
export const SEARCH_EMPTY = 'SEARCH_EMPTY';
export const searchEmpty = () => ({
    type: SEARCH_EMPTY,
    
});
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const clearSearch = () => ({
    type: CLEAR_SEARCH
})


export const searchThunk = (param) => (dispatch, getState) => {
    // dispatch(bookFetchLoading())

    const url = "http://localhost:8080/users/search/" + param
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
            if(!data){
                return dispatch(searchEmpty())
                
            }
            dispatch(searchSuccess(data))
        })
}