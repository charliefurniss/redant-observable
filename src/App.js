import { connect } from 'react-redux';

import './App.css';
import ComicsList from './components/comicsList';
import Favourites from './components/favourites';
import { openFavourites } from './actions';

function App({ app, favourites, openFavourites }) {
  return (
    <div className='App'>
      <header className='site-header'>
        <h1 className='site-heading'>Red Ant Comics</h1>
        <button
          className='favourites-toggle js-favourites-toggle'
          onClick={openFavourites}
        ></button>
      </header>

      <main className='site-content'>
        <ComicsList />
      </main>
      <Favourites />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    favourites: state.favourites,
  };
};

export default connect(mapStateToProps, { openFavourites })(App);
