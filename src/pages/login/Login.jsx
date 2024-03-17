import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.css";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { saveUser, saveToken, saveUserId } from "../../state/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErr("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErr("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch(saveUser(userCredential.user.email));
          dispatch(saveToken(userCredential.user.accessToken));
          dispatch(saveUserId(userCredential._tokenResponse.localId));
        })
        .then(navigate("/"));
    } catch (error) {
      setErr(error);
    }
  };
  console.log(err);
  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            placeholder="Type your email"
            type="email"
            id="email"
            autoComplete="on"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <input
            placeholder="Type your password"
            type="password"
            id="password"
            autoComplete="on"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {err ? <div className={styles["error-msg"]}>{err.message}</div> : <></>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
