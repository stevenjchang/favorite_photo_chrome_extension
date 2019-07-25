import React from 'react';
import PropTypes from 'prop-types';

const truncateTitle = (title) => title.slice(0, 35)

const PhotoListItem = ({
  handleChangeRoute,
  isFavorite,
  photoInfo,
  toggleFavoritePhoto,
}) => {
  const { id, title, url } = photoInfo;

  return (
    <div style={{ marginBottom: "35px" }}>
      <div>
        <p style={{ display: "inline-block", marginLeft: "3px" }}>
          {truncateTitle(title)}
        </p>
      </div>
      <div>
        <img
          alt={`${title}`}
          src={url}
          style={{ width: "250px", height: "150px" }}
          onClick={() => handleChangeRoute("PhotoListSingle", id)}
        />
      </div>
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
