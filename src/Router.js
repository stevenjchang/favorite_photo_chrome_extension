import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhotoList from './PhotoList';
import PhotoListSingle from './PhotoListSingle';

const dummyJson = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  }
];

const Router = () => {
  const [componentToRender, setComponentToRender] = useState('PhotoList');
  const [photoIdToRender, setPhotoIdToRender] = useState();

  const handleChangeRoute = (componentName, photoId) => {
    setPhotoIdToRender(photoId);
    setComponentToRender(componentName);
  }

  return (
    <>
      {componentToRender === "PhotoList" && (
        <PhotoList photos={dummyJson} handleChangeRoute={handleChangeRoute} />
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
