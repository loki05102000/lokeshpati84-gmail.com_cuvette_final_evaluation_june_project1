import React, { useState } from "react";
import Styles from "./login.module.css";
import image from "./image.png";
import { Link } from "react-router-dom";

function Login() {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value });
  };
  return (
    <div className={Styles.main}>
      <div className={Styles.left}>
        <img src={image} alt="logo" className={Styles.image} />
      </div>
      <div className={Styles.right}>
        <div className={Styles.heading}>
          <h1>Login</h1>
        </div>
        <form className={Styles.formContainer}>
          <input
            type="email"
            name="email"
            className={Styles.input}
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className={Styles.input}
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          <button type="submit" className={Styles.blueBtn}>
            Login
          </button>
        </form>
        <div className={Styles.loginPart}>
          <h4>Have no account yet?</h4>
          <Link to="/register">
            <button className={Styles.whiteBtn} type="button">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
