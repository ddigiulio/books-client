import * as actions from '../actions/author';

const initialState = {
    currentAuthor: {

    }
}

export default function reducer (state=initialState, action) {
    
    if(action.type === actions.AUTHOR_INFO_SUCCESS){
        
        return Object.assign({}, state, {
            currentAuthor: {
                id: action.author._id,
                name: action.author.name,
                imageSrc: action.author.imageSrc,
                smallImageSrc: action.author.smallImageSrc,
                about: action.author.about ,
                hometown: action.author.hometown,
                born: action.author.born,
                died: action.author.died
                       
            }
        });
    }
    else if (action.type ===actions.AUTHOR_DELETE_SUCCESS){
        return Object.assign({}, state, {
            currentAuthor: {                    
            }
        });
    }
    return state;
}