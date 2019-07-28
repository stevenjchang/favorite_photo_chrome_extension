import React from 'react';
import PropTypes from 'prop-types';
import { PHOTO_LIST_SINGLE } from '../constants'

const _truncateTitle = title => title.slice(0, 35);

const PhotoListItem = ({
  handleChangeRoute,
  isFavorite,
  photoInfo,
  toggleFavoritePhoto,
}) => {
  const { id, title, url } = photoInfo;
  const handleToggleFavoritePhoto = () => toggleFavoritePhoto(id);
  const handleOnClickChangeRoute = () => handleChangeRoute(PHOTO_LIST_SINGLE, id);

  return (
    <div style={{ marginBottom: "35px" }}>
      <div>
        <p style={{ display: "inline-block", marginLeft: "3px" }}>
          {_truncateTitle(title)}
        </p>
      </div>
      <div>
        <img
          alt={`${title}`}
          src={url}
          style={{ width: "250px", height: "150px" }}
          onClick={handleOnClickChangeRoute}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {isFavorite && (
          <img
            alt="Add to Favorites"
            src={"/icons/heart-filled-16x16.png"}
            onClick={handleToggleFavoritePhoto}
          />
        )}
        {!isFavorite && (
          <img
            alt="Add to Favorites"
            src={"/icons/heart-unfilled-16x16.png"}
            onClick={handleToggleFavoritePhoto}
          />
        )}
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  handleChangeRoute: PropTypes.func,
  isFavorite: PropTypes.bool,
  photoInfo: PropTypes.object,
  toggleFavoritePhoto: PropTypes.func,
};

export default PhotoListItem;
