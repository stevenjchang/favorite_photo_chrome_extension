import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, handleChangeRoute }) => {
  return (
    <>
      {photos.map(photo => (
        <PhotoListItem
          photoId={photo.id}
          handleChangeRoute={handleChangeRoute}
        />
      ))}
    </>
  );
};

PhotoList.propTypes = {

}

export default PhotoList;
