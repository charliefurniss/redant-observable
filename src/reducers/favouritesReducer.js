import {
  PANEL_CLOSED,
  PANEL_OPENED,
  FAVOURITE_ADDED,
  FAVOURITE_REMOVED,
} from '../actions';

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

    case FAVOURITE_ADDED: {
      return {
        ...state,
        comics: [...state.comics, action.payload],
      };
    }

    case FAVOURITE_REMOVED: {
      return {
        ...state,
        comics: state.comics.filter((item) => item !== action.payload),
      };
    }

    default:
      return state;
  }
};
