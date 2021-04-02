export const FETCH_COMICS = 'FETCH_COMICS';
export const FETCH_FULFILLED = 'FETCH_FULFILLED';

export const fetchComics = () => {
  return {
    type: FETCH_COMICS,
  };
};

export const fetchFulfilled = (comics) => {
  return {
    type: FETCH_FULFILLED,
    payload: comics,
  };
};
