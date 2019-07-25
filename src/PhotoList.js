import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  favoritePhotos,
  handleChangeRoute,
  photos,
  toggleFavoritePhoto,
}) => {
  const _calculateIsFavorite = (photoId, favoritePhotos) => {
    return favoritePhotos[photoId] === true;
  }

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
};

export default PhotoList;
