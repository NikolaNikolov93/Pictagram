import React, { useEffect } from "react";
import styles from "./SingleAlbum.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhotos, resetPhotoState } from "../../state/auth/photosSlice";
import Picture from "../picutres/Picture";

const SingleAlbum = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos());

    return () => {
      dispatch(resetPhotoState());
    };
  }, []);
  const photos = useSelector((state) => state.photos);
  const { albumId } = useParams();

  const filteredPhotos = photos
    .slice(0, 250)
    .filter((photo) => photo.albumId == albumId);
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
