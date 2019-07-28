import React from 'react';
import PropTypes from 'prop-types';
import { PHOTO_LIST } from '../constants';

const PhotoListSingle = ({
  singlePhotoInfo,
  handleChangeRoute,
  isFavorite,
  toggleFavoritePhoto
}) => {
  const { id, title, url } = singlePhotoInfo;

  return (
    <>
      <button onClick={() => handleChangeRoute(PHOTO_LIST, null)}>
        Back
      </button>
      <h4>Photo ID: {id}</h4>
      <h3>{title}</h3>
      <img
        alt={`${title}`}
        src={url}
        style={{ width: "285px", height: "250px" }}
      />
      <br />
      <div style={{ marginTop: "10px" }}>
        {isFavorite && (
          <img
            alt="Add to Favorites"
            src={"/icons/heart-filled-16x16.png"}
            onClick={() => toggleFavoritePhoto(id)}
          />
        )}
        {!isFavorite && (
          <img
            alt="Add to Favorites"
            src={"/icons/heart-unfilled-16x16.png"}
            onClick={() => toggleFavoritePhoto(id)}
          />
        )}
      </div>
      <br />
      <br />
    </>
  );
};

PhotoListSingle.propTypes = {
  singlePhotoInfo: PropTypes.object,
  handleChangeRoute: PropTypes.func,
  isFavorite: PropTypes.bool,
  toggleFavoritePhoto: PropTypes.func,
};

export default PhotoListSingle;
