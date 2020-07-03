import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOS_PENDING,
    REQUEST_ROBOS_SUCCESS,
    REQUEST_ROBOS_FAILURE
 } from './constants.js';



 //STATE SEARCHFIELD
const initialStateSearch = {
    searchField: ''
}


//SEARCHFIELD
export const searchRobos = ( state=initialStateSearch, action={} ) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            // return { ...state, searchField: action.payload }
            return Object.assign( {}, state, { searchField: action.payload } );
        default:
            return state;
    }
}





 //STATE ROBOS
 const initialStateRobos = {
    isPending: false,
    robos: [],
    error: ''
}


//ROBOS
export const requestRobos = ( state=initialStateRobos, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOS_PENDING:
            return Object.assign( {}, state, { isPending: true } );
        case REQUEST_ROBOS_SUCCESS:
            return Object.assign( {}, state, { robos: action.payload, isPending: false} );
        case REQUEST_ROBOS_FAILURE:
            return Object.assign( {}, state, { error: action.payload, isPending: false} )
        default:
            return state;
    }
}