import React from "react";
import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";

const Catalog = ({ catalogId, url }) => {
  return (
    <Link
      className={styles["catalog-container"]}
      style={{ backgroundImage: `url(${url})` }}
      to={`/${catalogId}`}
    >
      <h2>{`${catalogId}`}</h2>
    </Link>
  );
};

export default Catalog;
