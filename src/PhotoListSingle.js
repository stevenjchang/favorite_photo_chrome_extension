import React from 'react';
import PropTypes from 'prop-types';

const PhotoListSingle = ({ photoIdToRender, handleChangeRoute }) => {
  return (
    <>
      <button
        onClick={photoIdToRender =>
          handleChangeRoute("PhotoList", null)
        }
      >
        Return to Home
      </button>
      <h4>Single: photoId: {photoIdToRender}</h4>
    </>
  );
};

PhotoListSingle.propTypes = {

}

export default PhotoListSingle;
