import { FETCH_FULFILLED } from '../actions/comicsActions';

const initialState = {
  data: [],
  loading: true,
};

export function comicsReducer(state = initialState, action) {
  console.log({ action });
  switch (action.type) {
    case FETCH_FULFILLED: {
      return { ...state, loading: false, data: action.payload };
    }
    default:
      return state;
  }
}
