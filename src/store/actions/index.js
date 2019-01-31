import axios from "axios";
export const LOADING = "POST_LOADING";
export const GET_ERRORS = "GET_ERRORS";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

const KEY = `i6V4acPzUYieJPgrWGxvgc3ay1BYVF757kNh4R0Y`;
const SKEY = `i6V4acPzUYieJPgrWGxvgc3ay1BYVF757kNh4R0Y`;
const URL = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;
const SEARCH = `https://images-api.nasa.gov/search?`;

export const searchPhoto = query => dispatch => {
  const search = !query ? "mars" : query;
  dispatch(setLoading());
  axios
    .get(`${SEARCH}q=${search}`)
    .then(res =>
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res.data.collection.items.filter((x, idx) => idx < 6)
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
