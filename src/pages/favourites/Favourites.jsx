import React, { useEffect, useState } from "react";
import styles from "./Favourites.module.css";
import { useSelector } from "react-redux";
import Picture from "../picutres/Picture";

const Favourites = () => {
  const [likedPicsData, setLikedPicsData] = useState([]);
  const likedPicsID = useSelector((state) => state.user.likedPics);
  const photos = useSelector((state) => state.photos.data);

  useEffect(() => {
    const filteredLikedPhotos = photos.filter((photo) =>
      likedPicsID.includes(photo.id)
    );
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
