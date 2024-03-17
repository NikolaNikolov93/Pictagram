import React, { useEffect, useState } from "react";
import styles from "./Favourites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, resetPhotoState } from "../../state/auth/photosSlice";
import Picture from "../picutres/Picture";

const Favourites = () => {
  const dispatch = useDispatch();
  const [likedPicsData, setLikedPicsData] = useState([]);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);
  const likedPicsID = useSelector((state) => state.user.likedPics);
  const photos = useSelector((state) => state.photos);
  useEffect(() => {
    const filteredLikedPhotos = photos
      .slice(0, 250)
      .filter((photo) => likedPicsID.includes(photo.id));
    setLikedPicsData(filteredLikedPhotos);
  }, [likedPicsID, photos]);

  return (
    <div className={styles["pictures-container"]}>
      {likedPicsData.map((photo) => (
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

export default Favourites;
