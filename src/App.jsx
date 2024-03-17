import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Favourites from "./pages/favourites/Favourites";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./state/auth/authSlice";
import NavBar from "./features/navbar/NavBar";
import SingleAlbum from "./pages/singleAlbum/SingleAlbum";

function App() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <NavBar user={user} logout={handleLogout} />
      <div className="site">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/:albumId" element={<SingleAlbum />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
