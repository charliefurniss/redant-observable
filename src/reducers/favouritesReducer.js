import { PANEL_CLOSED, PANEL_OPENED } from '../actions';

const initialState = {
  isOpen: false,
  comics: [],
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PANEL_OPENED: {
      return {
        ...state,
        isOpen: true,
      };
    }

    case PANEL_CLOSED: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default:
      return state;
  }
};
