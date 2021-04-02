import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { closeFavourites, removeFavourite } from '../actions';

export const Favourites = ({
  isOpen,
  closeFavourites,
  favouriteComicIds,
  comics,
  removeFavourite,
}) => {
  const panelClassName = isOpen ? 'favourites-panel open' : 'favourites-panel';

  return (
    <div id='favourites-panel' className={panelClassName}>
      <div className='favourites-header'>
        <h2>Favourites</h2>
        <button className='close js-close' onClick={closeFavourites}></button>
      </div>
      <div className='favourites-content'>
        <ul className='favourites-list'>
          {favouriteComicIds.map((id, index) => {
            const [comic] = comics.filter((comic) => comic.id === id);
            return (
              <FavouriteContainer>
                <StyledListItem key={index}>
                  {comic.title}
                  <button
                    className='remove js-remove'
                    onClick={() => removeFavourite(id)}
                  ></button>
                </StyledListItem>
              </FavouriteContainer>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.favourites.isOpen,
    favouriteComicIds: state.favourites.comics,
    comics: state.comics.data,
  };
};

export default connect(mapStateToProps, { closeFavourites, removeFavourite })(
  Favourites
);

const FavouriteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  width: 100%;
`;

const StyledListItem = styled.li`
  display: block;
  width: 100%;
`;
