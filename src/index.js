import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import Counter from "./Counter";
import "./index.css";

const initialState = {
  count : 0
}

function reducer(state=initialState, action) {
  console.log('reducer', state, action);

  switch (action.type) {
    case 'INCREMENT' :
      return {
        count : state.count + 1
      };
    case 'DECREMENT' :
      return {
        count : state.count - 1
      };
    case 'RESET' :
      return {
        count : 0
      };
    default:
      return state;
  }

}

const store = createStore(reducer);

store.dispatch({ type : "INCREMENT" });
store.dispatch({ type : "INCREMENT" });
store.dispatch({ type : "DECREMENT" });
store.dispatch({ type : "RESET" });

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
