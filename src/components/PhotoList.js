import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem';

const _calculateIsFavorite = (photoId, favoritePhotos) => {
  return favoritePhotos[photoId] === true;
};

const PhotoList = ({
  favoritePhotos,
  handleChangeRoute,
  photos,
  toggleFavoritePhoto,
}) => {
  return (
    <>
      {photos.map(photoInfo => (
        <PhotoListItem
          key={photoInfo.id}
          isFavorite={_calculateIsFavorite(photoInfo.id, favoritePhotos)}
          photoInfo={photoInfo}
          handleChangeRoute={handleChangeRoute}
          toggleFavoritePhoto={toggleFavoritePhoto}
        />
      ))}
    </>
  );
};

PhotoList.propTypes = {
  favoritePhotos: PropTypes.object,
  handleChangeRoute: PropTypes.func,
  photos: PropTypes.array,
  toggleFavoritePhoto: PropTypes.func
};

export default PhotoList;
