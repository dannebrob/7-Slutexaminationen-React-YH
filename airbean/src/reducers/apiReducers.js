const initialState = {};

let apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_API_SUCCESS":
      // SUCCESS!
      return {
        ...state,
        eta: [action.payload.eta],
        orderNumb: [action.payload.orderNr],
      };
    case "FETCH_API_FAILURE":
      //Some error...
      return state;
    default:
      return state;
  }
};

export default apiReducer;
