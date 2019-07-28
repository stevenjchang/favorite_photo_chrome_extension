/*global chrome*/
import React, { useState, useEffect } from 'react';
import PhotoList from './PhotoList';
import PhotoListSingle from './PhotoListSingle';
import axios from 'axios';
import { PHOTOS_URL, PHOTO_LIST, PHOTO_LIST_SINGLE } from '../constants';

const StateManagement = () => {
  const [ componentToRender, setComponentToRender ] = useState(PHOTO_LIST);
  const [ photoIdToRender, setPhotoIdToRender ] = useState();
  const [ favoritePhotos, setFavoritePhotos ] = useState({});
  const [ apiData, setApiData ] = useState([]);

  // fetch apiData on ComponentDidMount
  useEffect(() => {
    axios.get(PHOTOS_URL)
    .then((response) => {
      const truncatedData = response.data.slice(0, 20);
      setApiData(truncatedData);
    })
    .catch((err) => {
      console.log('Error: api request failed ==>', err);
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

  const _calculateSinglePhotoInfo = (photoId, allPhotos) => {
    let targetPhotoInfo = allPhotos.filter(photo => photoId === photo.id);
    return targetPhotoInfo.length > 0 ? targetPhotoInfo[0] : {};
  }

  const _calculateIsFavorite = (photoId, favoritePhotos) => {
    return favoritePhotos[photoId] === true;
  };

  return (
    <>
      {componentToRender === PHOTO_LIST && (
        <PhotoList
          photos={apiData}
          favoritePhotos={favoritePhotos}
          toggleFavoritePhoto={toggleFavoritePhoto}
          handleChangeRoute={handleChangeRoute}
        />
      )}
      {componentToRender === PHOTO_LIST_SINGLE && (
        <PhotoListSingle
          singlePhotoInfo={_calculateSinglePhotoInfo(
            photoIdToRender,
            apiData
          )}
          handleChangeRoute={handleChangeRoute}
          isFavorite={_calculateIsFavorite(photoIdToRender, favoritePhotos)}
          toggleFavoritePhoto={toggleFavoritePhoto}
        />
      )}
    </>
  );
}

export default StateManagement;
