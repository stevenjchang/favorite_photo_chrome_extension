/*global chrome*/
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PhotoList from './PhotoList';
import PhotoListSingle from './PhotoListSingle';
import axios from 'axios';

const constants = {
  PHOTOS_URL: "https://jsonplaceholder.typicode.com/photos",
}

const Router = () => {
  const [ componentToRender, setComponentToRender ] = useState('PhotoList');
  const [ photoIdToRender, setPhotoIdToRender ] = useState();
  const [ favoritePhotos, setFavoritePhotos ] = useState({});
  const [ apiData, setApiData ] = useState([]);

  // fetch apiData on ComponentDidMount
  useEffect(() => {
    axios.get(constants.PHOTOS_URL)
    .then((response) => {
      const truncatedData = response.data.slice(0, 20);
      setApiData(truncatedData);
    })
  }, [])

  // look up local storage for saved favoritePhotos on ComponentDidMount
  useEffect(() => {
    chrome.storage.local.get("favoritePhotos", function(result) {
      if (result.favoritePhotos) {
        setFavoritePhotos(JSON.parse(result.favoritePhotos));
      }
    });
  }, []);

  const handleChangeRoute = (componentName, photoId) => {
    setPhotoIdToRender(photoId);
    setComponentToRender(componentName);
  }

  const toggleFavoritePhoto = (photoId) => {
    let updatedFavoritePhotos = Object.assign({}, favoritePhotos);
    updatedFavoritePhotos[photoId] = !favoritePhotos[photoId]
    setFavoritePhotos(updatedFavoritePhotos);
    chrome.storage.local.set({
      favoritePhotos: JSON.stringify(updatedFavoritePhotos)
    });
  }

  const _calculateSinglePhotoInfo = (photoId) => {
    let targetPhotoInfo = apiData.filter(photo => photoId === photo.id);
    return targetPhotoInfo.length > 0 ? targetPhotoInfo[0] : {};
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
          singlePhotoInfo={_calculateSinglePhotoInfo(photoIdToRender)}
          handleChangeRoute={handleChangeRoute}
        />
      )}
    </>
  );
}

export default Router;
