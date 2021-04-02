import React from 'react';
import { connect } from 'react-redux';
import { closeFavourites } from '../actions';

export const Favourites = ({ isOpen, closeFavourites }) => {
  const panelClassName = isOpen ? 'favourites-panel open' : 'favourites-panel';

  return (
    <div id='favourites-panel' className={panelClassName}>
      <div className='favourites-header'>
        <h2>Favourites</h2>
        <button className='close js-close' onClick={closeFavourites}></button>
      </div>
      <div className='favourites-content'>
        <ul className='favourites-list'>
          <li>
            Comic name
            <button className='remove js-remove' onClick={() => {}}></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.favourites.isOpen,
  };
};

export default connect(mapStateToProps, { closeFavourites })(Favourites);
