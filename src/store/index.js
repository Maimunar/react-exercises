import { combineReducers, createStore } from "redux";

const ADD = "ADD";
const SET = "SET";

// Input

const inputReducer = (state = [0], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.input];
    case SET:
      return action.input;
    default:
      return state;
  }
};

// const inputStore = Redux.createStore(inputReducer);

const isDecimalReducer = (state = false, action) => {
  switch (action.type) {
    case SET:
      return action.input;
    default:
      return state;
  }
};

// const isDecimalStore = Redux.createStore(isDecimalReducer);

const isFinishedReducer = (state = false, action) => {
  switch (action.type) {
    case SET:
      return action.input;
    default:
      return state;
  }
};

// const isFinishedStore = Redux.createStore(isFinishedReducer);

const baseReducer = combineReducers({
  input: inputReducer,
  isDecimal: isDecimalReducer,
  isFinished: isFinishedReducer,
});

const store = createStore(baseReducer);
export default store;

// exports = {
//   store,
//   addAction,
//   setAction,
// };
