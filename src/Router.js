import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PhotoList from './PhotoList';
import PhotoListSingle from './PhotoListSingle';
import axios from 'axios';

const constants = {
  PHOTOS_URL: "https://jsonplaceholder.typicode.com/photos",
}

const Router = () => {
  const [componentToRender, setComponentToRender] = useState('PhotoList');
  const [photoIdToRender, setPhotoIdToRender] = useState();
  const [favoritePhotos, setFavoritePhotos] = useState({
    '1': true,
    '2': false,
    '3': true,
  });
  const [ apiData, setApiData ] = useState([]);

  useEffect(() => {
    axios.get(constants.PHOTOS_URL)
    .then((response) => {
      const truncatedData = response.data.slice(0, 20);
      setApiData(truncatedData);
    })
  }, [])

  const handleChangeRoute = (componentName, photoId) => {
    setPhotoIdToRender(photoId);
    setComponentToRender(componentName);
  }

  const toggleFavoritePhoto = (photoId) => {
    let updatedFavoritePhotos = Object.assign({}, favoritePhotos);
    updatedFavoritePhotos[photoId] = !favoritePhotos[photoId]
    setFavoritePhotos(updatedFavoritePhotos);
  }

  return (
    <>
      {componentToRender === "PhotoList" && (
        <PhotoList
          photos={apiData}
          favoritePhotos={favoritePhotos}
          toggleFavoritePhoto={toggleFavoritePhoto}
          handleChangeRoute={handleChangeRoute}
        />
      )}

      {componentToRender === "PhotoListSingle" && (
        <PhotoListSingle
          photoIdToRender={photoIdToRender}
          handleChangeRoute={handleChangeRoute}
        />
      )}
    </>
  );
}

export default Router;
