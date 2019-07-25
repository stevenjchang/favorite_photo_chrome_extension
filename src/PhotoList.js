import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, handleChangeRoute }) => {
  return (
    <>
      {photos.map(photoInfo => (
        <PhotoListItem
          photoInfo={photoInfo}
          handleChangeRoute={handleChangeRoute}
        />
      ))}
    </>
  );
};

PhotoList.propTypes = {

}

export default PhotoList;
