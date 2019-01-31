import axios from "axios";
export const LOADING = "POST_LOADING";
export const GET_ERRORS = "GET_ERRORS";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const RECIEVED_NEW_IMAGE = "RECIEVED_NEW_IMAGE";

const KEY = `i6V4acPzUYieJPgrWGxvgc3ay1BYVF757kNh4R0Y`;
const SKEY = `i6V4acPzUYieJPgrWGxvgc3ay1BYVF757kNh4R0Y`;
const URL = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;
const SEARCH = `https://images-api.nasa.gov/search?`;

export const searchPhoto = (query, img) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`${SEARCH}q=${query}`)
    .then(res =>
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res.data
      })
    )
    .then(() => getCollectImg(img))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

export const getCollectImg = img => dispatch => {
  const images = img;
  console.log("actionimage", images);

  dispatch(setLoading());
  axios
    .get(`${images}`)
    .then(res =>
      dispatch({
        type: RECIEVED_NEW_IMAGE,
        payload: res.data
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
