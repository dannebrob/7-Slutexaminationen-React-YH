const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COFFEE":
      return addToCart(state, action);
    case "EMPTY_CART":
      return (state = initialState);
    default:
      return state;
  }
};
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
    return newState;
  }
};

export default orderReducer;
