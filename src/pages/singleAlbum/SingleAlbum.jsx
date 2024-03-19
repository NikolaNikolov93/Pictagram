import React, { useEffect } from "react";
import styles from "./SingleAlbum.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../../state/auth/photosSlice";
import Picture from "../picutres/Picture";

const SingleAlbum = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("laoded");
    dispatch(fetchPhotos());
  }, []);
  const photos = useSelector((state) => state.photos.data);
  const { albumId } = useParams();

  const filteredPhotos = photos.filter((photo) => photo.albumId == albumId);
  return (
    <div className={styles["pictures-container"]}>
      {filteredPhotos.map((photo) => (
        <Picture
          key={photo.id}
          id={photo.id}
          thumbnail={photo.thumbnailUrl}
          title={photo.title}
          url={photo.url}
        />
      ))}
    </div>
  );
};

export default SingleAlbum;
