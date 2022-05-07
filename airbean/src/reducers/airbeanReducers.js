const initialState = {
  cart: [],
};

const airbeanReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: action.payload,
      };
  }
};
