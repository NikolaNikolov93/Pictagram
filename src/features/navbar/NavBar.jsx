import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const NavBar = ({ user, logout }) => {
  return (
    <section className={styles["site-nav-container"]}>
      <div className={styles["site-nav"]}>
        <ul>
          <li>
            <Link to="/">
              <CiHome />
              Home
            </Link>
          </li>

          {user === null ? (
            <>
              <li>
                <Link to="/login">
                  <IoLogInOutline />
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  {" "}
                  <IoCreateOutline />
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/favourites">
                  <CiStar />
                  Favourites
                </Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  <CiLogout />
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
        {user != null ? <span>Welcome, {user}!</span> : <></>}
      </div>
    </section>
  );
};

export default NavBar;
