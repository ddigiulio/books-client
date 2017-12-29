import * as actions from '../actions';

const initialState = {
    currentlyReading: {
        currentBookLoading: false,
        error: null
         },
     topBooks: [{
     }], 
     topAuthors: [{

     }]
};

export const reducer = (state=initialState, action) => {
    // if (action.type === actions.CURRENT_BOOK_LOADING){
        
    //     return Object.assign({}, state, {
    //         currentlyReading: {
    //             currentBookLoading: true,
    //             error: null
    //         }
    //     })
    // }
    if (action.type === actions.CURRENT_BOOK_SUCCESS){
        
        return Object.assign({}, state, {
            currentlyReading:  {
                title: action.book.title,
                author: action.book.author,
                imageSrc: action.book.imageSrc
            }
        });
    }
   else if (action.type === actions.TOP_BOOK_SUCCESS){
        
        return Object.assign({}, state, {
           topBooks: [...state.topBooks, {
               title: action.book.title,
               author: action.book.author,
               imageSrc: action.book.imageSrc
           }]
        });
    }
     else if (action.type === actions.TOP_AUTHOR_SUCCESS){
        
        return Object.assign({}, state, {
           topAuthors: [...state.topAuthors, {
               name: action.author.name,
               imageSrc: action.author.imageSrc
           }]
        });
    }
    
    return state;
};