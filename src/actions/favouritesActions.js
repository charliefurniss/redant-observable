export const PANEL_OPENED = 'PANEL_OPENED';
export const PANEL_CLOSED = 'PANEL_CLOSED';
export const FAVOURITE_ADDED = 'FAVOURITE_ADDED';
export const FAVOURITE_REMOVED = 'FAVOURITE_REMOVED';

export const openFavourites = () => {
  return {
    type: PANEL_OPENED,
  };
};

export const closeFavourites = () => {
  return {
    type: PANEL_CLOSED,
  };
};

export const addFavourite = (favouriteId) => {
  return {
    type: FAVOURITE_ADDED,
    payload: favouriteId,
  };
};

export const removeFavourite = (favouriteId) => {
  return {
    type: FAVOURITE_REMOVED,
    payload: favouriteId,
  };
};
