import { connect } from 'react-redux';

import Comic from './comic';

export const ComicsList = (props) => {
  const { comics, loading } = props;

  return (
    <>
      {loading && <p>Please wait...</p>}
      {!loading && (
        <ul className='comics-list'>
          {comics.map((comic, index) => (
            <Comic key={index} comic={comic} />
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { comics: state.comics.data };
};

export default connect(mapStateToProps)(ComicsList);
