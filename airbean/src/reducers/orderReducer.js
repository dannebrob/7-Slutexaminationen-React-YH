const initialState = [];

const orderReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    //Old working:  action = { type: "INCREMENT", payload: "Bryggkaffe"}
    // New not working = action.payload = { item: 'Bryggkaffe, price: 43, pc: 1}
    case "ADD_COFFEE":
      return addToCart(state, action);

    // case "REMOVE_COFFEE":
    //   if (!action.payload in state) return state;
    //   if (state[action.payload] < 2) {
    //     const newState = { ...state };
    //     delete newState[action.payload];
    //     return newState;
    //   }
    //   return {
    //     ...state,
    //     [action.payload]: state[action.payload] - 1,
    //   };
    default:
      return state;
  }
};

//let copy = [ ...array ]
//let copyObject = { ...object }

const addToCart = (state, action) => {
  if (state.find((order) => action.payload.item === order.item)) {
    return state.map((order) => {
      if (order.item === action.payload.item) {
        return { ...order, amount: order.amount + 1 };
      } else {
        return order;
      }
    });
  } else {
    const newState = [
      ...state,
      {
        item: action.payload.item,
        price: action.payload.price,
        amount: action.payload.amount,
      },
    ];
    console.log("this is newState: ", newState);
    return newState;
  }
};

export default orderReducer;
