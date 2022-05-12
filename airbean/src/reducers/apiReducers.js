const initialState = {
  apiPost: {},
};

let apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return { ...state, apiPost: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
