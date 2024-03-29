import React, { useState } from "react";
import styles from "./Register.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

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
      /**
       * Handling register with Firebase authentication
       */

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(setLoading(false));
      /**
       * If email --> navigate to home page
       * else set the error to be displayed on the form
       */
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      setErr(error);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <h2>Register to see more!</h2>
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
          Already have an account? <Link to="/login">Click here to login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
