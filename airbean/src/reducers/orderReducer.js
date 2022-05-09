const initialState = {};

const orderReduucer = (state = initialState, action) => {
  switch (action.type) {
    // action = { type: "INCREMENT", payload: "Bryggkaffe"}
    case "INCRAMENT_COFFEE":
      if (action.payload in state) {
        return {
          ...state,
          [action.payload]: state[action.payload] + 1,
        };
      }
      return { ...state, [action.payload]: 1 };
    case "DECRAMENT_COFFEE":
      if (!action.payload in state) return state;
      if (state[action.payload] < 2) {
        const newState = { ...state };
        delete newState[action.payload];
        return newState;
      }
      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
      };
    default:
      return state;
  }
};

export default orderReduucer;
