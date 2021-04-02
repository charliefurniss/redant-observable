export const PANEL_OPENED = 'PANEL_OPENED';
export const PANEL_CLOSED = 'PANEL_CLOSED';

export const openFavourites = () => {
  console.log('panelOpened');
  return {
    type: PANEL_OPENED,
  };
};

export const closeFavourites = () => {
  console.log('panelClosed');
  return {
    type: PANEL_CLOSED,
  };
};
