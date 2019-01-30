import axios from "axios";
export const FETCH_PHOTO = "FETCH_PHOTO";
export const LOADING = "POST_LOADING";
export const GET_ERRORS = "GET_ERRORS";

const KEY = `i6V4acPzUYieJPgrWGxvgc3ay1BYVF757kNh4R0Y`;
const URL = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;

export const fetchPhoto = () => dispatch => {
  dispatch(setLoading());
  axios
    .get(`${URL}`)
    .then(res =>
      dispatch({
        type: FETCH_PHOTO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    );
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
