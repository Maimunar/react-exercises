const ADD = "ADD";
const SET = "SET";

exports.addAction = (input) => {
  return {
    type: ADD,
    input,
  };
};

exports.setAction = (input) => {
  return {
    type: SET,
    input,
  };
};
