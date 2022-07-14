import { legacy_createStore } from "@reduxjs/toolkit";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = legacy_createStore(reducerFn);

export default store;
