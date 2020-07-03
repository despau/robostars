import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOS_PENDING,
    REQUEST_ROBOS_SUCCESS,
    REQUEST_ROBOS_FAILURE
 } from './constants.js';


 //SEARCHFIELD

 //setSearchField returns an action
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});


//ROBOS

//requestRobos returns a function
export const requestRobos = () => ( dispatch ) => {
    dispatch({ type: REQUEST_ROBOS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
      return response.json();
    }).then( data => dispatch({
      type: REQUEST_ROBOS_SUCCESS,
      payload: data
    })).catch( error => dispatch({
        type: REQUEST_ROBOS_FAILURE,
        payload: error
    }));
};

// export const requestRobos = (  ) => ({

// });

// export const requestRobos = (  ) => ({

// });

