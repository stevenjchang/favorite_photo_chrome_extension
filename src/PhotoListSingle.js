import React from 'react';
import PropTypes from 'prop-types';

const PhotoListSingle = ({ singlePhotoInfo, handleChangeRoute }) => {
  const { id, title, url } = singlePhotoInfo;

  return (
    <>
      <button
        onClick={() =>
          handleChangeRoute("PhotoList", null)
        }
      >
        Back
      </button>
      <h4>Photo ID: {id}</h4>
      <img
        alt={`${title}`}
        src={url}
        style={{ width: "285px", height: "250px" }}
      />
      <br />
      <h3>{title}</h3>
      <br />
    </>
  );
};

PhotoListSingle.propTypes = {

}

export default PhotoListSingle;
