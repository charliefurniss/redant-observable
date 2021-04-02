import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions';

export const Comic = ({
  comic,
  addFavourite,
  favouriteIds,
  removeFavourite,
}) => {
  if (!comic.title || !comic?.images[0]?.path) return null;

  const imageUrl = comic?.images[0]?.path + '/portrait_uncanny.jpg';
  const isFavourite = favouriteIds.includes(comic.id);

  const Button = () =>
    isFavourite ? (
      <button
        className='button js-add'
        onClick={() => removeFavourite(comic.id)}
      >
        Remove from favourites
      </button>
    ) : (
      <button className='button js-add' onClick={() => addFavourite(comic.id)}>
        Add to favourites
      </button>
    );

  return (
    <li className='comic-item'>
      <div className='comic-card'>
        <img src={imageUrl} alt={`${comic.title} title`} />
        <h2>{comic.title}</h2>
        <Button />
      </div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return { comics: state.comics.data, favouriteIds: state.favourites.comics };
};

export default connect(mapStateToProps, { addFavourite, removeFavourite })(
  Comic
);
