import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Create a store from redux library
import {createStore} from 'redux';

//STORE -> GLOBALIZED STATE


//ACTION  --This describes the thing you want to do.
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
  }
};

let store = createStore(counter);

//Display in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment()); //First action called---value is now 1.
store.dispatch(increment()); //Second action called---value is now 2.
store.dispatch(decrement()); //Third action called---value is now 1.





ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
