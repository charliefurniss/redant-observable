import { connect } from 'react-redux';

const Comic = ({ comic }) => {
  if (!comic.title || !comic?.images[0]?.path) return null;

  const imageUrl = comic?.images[0]?.path + '/portrait_uncanny.jpg';

  return (
    <li className='comic-item'>
      <div className='comic-card'>
        <img src={imageUrl} alt={`${comic.title} title`} />
        <h2>{comic.title}</h2>
        <button className='button js-add' onClick={() => {}}>
          Add to favourites
        </button>
      </div>
    </li>
  );
};

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
