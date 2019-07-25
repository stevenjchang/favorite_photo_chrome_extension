import React from 'react';
import PropTypes from 'prop-types';

const PhotoListItem = ({ photoInfo, handleChangeRoute }) => {
  return (
    <>
      <button
        onClick={() => handleChangeRoute("PhotoListSingle", photoInfo.id)}
      >
        ChangeRoute
      </button>
      <p>{photoInfo.title}</p>
      <p>{}</p>
    </>
  );
};

PhotoListItem.propTypes = {

}

export default PhotoListItem;
