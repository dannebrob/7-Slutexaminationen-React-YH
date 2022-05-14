export const FETCH_API_BEGIN = "FETCH_API_BEGIN";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const FETCH_API_FAILURE = "FETCH_API_FAILURE";

export const fetchApiBegin = (api) => ({
  type: FETCH_API_BEGIN,
});

export const fetchapiSuccess = (api) => ({
  type: FETCH_API_SUCCESS,
});

export const fetchApiFailure = (error) => ({
  type: FETCH_API_FAILURE,
  payload: { error },
});
