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

  useEffect(() => {
    if (likedPics.includes(id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [likedPics]);
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
    <div className={styles["wrapper"]} data-before={title}>
      <div
        className={styles["picture-wrapper"]}
        style={{ backgroundImage: `url(${url})` }}
      >
        {user != null ? (
          <div className={styles["favourites"]} onClick={() => handleLike(id)}>
            {isLiked ? <FcLike /> : <FcLikePlaceholder />}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Picture;
