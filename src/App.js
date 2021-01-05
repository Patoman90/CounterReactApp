import React  from 'react';
import { useSelector,useDispatch } from 'react-redux'; //Allows us to select a reducer to use in the app.
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button> 
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>I should not see this if user is not logged in.</h3> : ''}
    </div>
  );
}

export default App;
