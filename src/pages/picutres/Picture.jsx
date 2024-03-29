import React, { useEffect, useState } from "react";
import styles from "./Picture.module.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { removeLikedPic, saveLikedPics } from "../../state/auth/authSlice";

const Picture = ({ id, thumbnail, title, url }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const likedPics = useSelector((state) => state.user.likedPics);
  const user = useSelector((state) => state.user.user);

  /**
   * Checks for liked pictures
   */
  useEffect(() => {
    if (likedPics.includes(id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [likedPics]);
  /**
   *
   * @param {handleLike} id
   * Adds or remove photos from favourites list in redux store
   */
  function handleLike(id) {
    if (isLiked) {
      dispatch(removeLikedPic(id));
      setIsLiked(false);
    } else {
      dispatch(saveLikedPics(id));
      setIsLiked(true);
    }
  }

  return (
    <div className={styles["pic-container"]}>
      <div
        className={styles["pic"]}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className={styles["title"]}>{title}</div>
      <div className={styles["pic-info"]}>
        <p>Likes:</p>
        <p>{id}</p>
      </div>
      {user != null ? (
        <div className={styles["favourites"]} onClick={() => handleLike(id)}>
          {isLiked ? <FcLike /> : <FcLikePlaceholder />}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Picture;
