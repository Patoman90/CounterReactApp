const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload; //Uses payload from actions.index.js
        case 'DECREMENT':   
            return state - 1;
        default:
            return state;
    }
};

export default counterReducer;


//This is a reducer that adds to the state.value or can decrement the state.value.
//I export it to allow the store to access it.