import React from 'react';
import PropTypes from 'prop-types';

const PhotoListItem = ({ photoId, handleChangeRoute }) => {
  return (
    <>
      <button onClick={() => handleChangeRoute('PhotoListSingle', photoId)}>ChangeRoute</button>
    </>
  );
};

PhotoListItem.propTypes = {

}

export default PhotoListItem;
