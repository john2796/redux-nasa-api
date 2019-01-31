import { RECIEVED_NEW_IMAGE, SEARCH_SUCCESS, LOADING } from "../actions";

const initialState = {
  loading: false,
  searchD: []
};
export default function nasaReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchD: action.payload
      };

    default:
      return state;
  }
}
