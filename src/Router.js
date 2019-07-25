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
  const [ apiData, setApiData ] = useState([]);

  useEffect(() => {
    axios.get(constants.PHOTOS_URL)
    .then((response) => {
      setApiData(response.data);
    })
  }, [])

  const handleChangeRoute = (componentName, photoId) => {
    setPhotoIdToRender(photoId);
    setComponentToRender(componentName);
  }

  return (
    <>
      {componentToRender === "PhotoList" && (
        <PhotoList photos={apiData} handleChangeRoute={handleChangeRoute} />
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
