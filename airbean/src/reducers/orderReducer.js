const initialState = [];

const orderReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "ADD_COFFEE":
      console.log(state);
      return addToCart(state, action);
    default:
      return state;
  }
};

// const incrament = (state, action) => {
//   return console.log("Incrament");
//   return {
//     ...state,
//     contents: state.contents.map((content, i) =>
//       i === 1 ? { ...content, text: action.payload } : content
//     ),
//   };
// };

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
