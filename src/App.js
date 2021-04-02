import { connect } from 'react-redux';

import './App.css';
import ComicsList from './components/comicsList';

function App({ app }) {
  return (
    <div className='App'>
      <header className='site-header'>
        <h1 className='site-heading'>Red Ant Comics</h1>
        <button className='favourites-toggle js-favourites-toggle'></button>
      </header>

      <main className='site-content'>
        <ComicsList />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps)(App);
