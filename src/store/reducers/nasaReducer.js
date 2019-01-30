import { POST_LOADING, FETCH_PHOTO } from "../actions";

const initialState = {
  ptoDay: null,
  loading: false
};
export default function nasaReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_PHOTO:
      return {
        ...state,
        loading: false,
        ptoDay: action.payload
      };

    default:
      return state;
  }
}
