import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux'; //combineReducers will combine all the reducers.

const allReducers = combineReducers({ //We create a var to hold all the reducers
    counter: counterReducer,  //This key name can be whatever you want. The value must be the reducer name.
    isLogged: loggedReducer
});

export default allReducers;