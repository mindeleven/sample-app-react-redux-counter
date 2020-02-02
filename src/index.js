import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import Counter from "./Counter";
import "./index.css";

function reducer(state, action) {
  console.log('reducer', state, action);
  return state;
}

const store = createStore(reducer);

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
