import {
  FETCH_API_BEGIN,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "../actions/apiActions";

const initialState = {};

let apirespons;

let apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_API_BEGIN":
    //Mark the state as loading
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

const postApi = () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "React POST Request Example" }),
  };

  return (dispatch) => {
    // Initial action dispatched
    dispatch({ type: { FETCH_API_BEGIN } });
    // Return promise with success and failure actions
    return fetch("http://localhost:5000/api/beans", requestOptions).then(
      (res) => {
        // dispatch({ type: { FETCH_API_SUCCESS }, apiPost: apirespons });
      },
      (err) => dispatch({ type: { FETCH_API_FAILURE }, err })
    );
  };
};

export default apiReducer;
