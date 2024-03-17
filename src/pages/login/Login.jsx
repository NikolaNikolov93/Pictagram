import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.css";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { saveUser, saveToken, saveUserId } from "../../state/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

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
      const response = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        dispatch(saveUser(userCredential.user.email));
        dispatch(saveToken(userCredential.user.accessToken));
        dispatch(saveUserId(userCredential._tokenResponse.localId));
      });
      if (email != "") {
        navigate("/");
      }
    } catch (error) {
      setErr(error);
    }
  };
  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <h2>Login to catch up!</h2>
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
        <p className={styles["relocation-msg"]}>
          Don't have an account?{" "}
          <Link to="/register">Click here to register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
