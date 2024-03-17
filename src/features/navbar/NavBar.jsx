import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { HiOutlineSearch } from "react-icons/hi";

const NavBar = ({ user, logout }) => {
  return (
    <section className={styles["site-nav-container"]}>
      <div className={styles["site-nav"]}>
        <ul>
          <li>
            <Link to="/">
              <CiHome />
              <span>Home</span>
            </Link>
          </li>

          {user === null ? (
            <>
              <li>
                <Link to="/login">
                  <IoLogInOutline />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  {" "}
                  <IoCreateOutline />
                  <span>Register</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/favourites">
                  <CiStar />
                  <span>Favourites</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  <CiLogout />
                  <span>Logout</span>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className={styles["search-container"]}>
          <input className={styles["site-nav-search"]} type="text"></input>
          <HiOutlineSearch className={styles["search-icon"]} />
        </div>
        {user != null ? <span>Welcome, {user}!</span> : <></>}
      </div>
    </section>
  );
};

export default NavBar;
