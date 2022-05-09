// const initialState = {
//   cart: [],
// };

let counterReduucer = (state = 0, action) => {
  switch (action.type) {
    case "INCRAMENT":
      return state + 1;
    case "DECRAMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReduucer;
