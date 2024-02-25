import React, { useState } from "react";
import Styles from "./register.module.css";
import image from "./image.png";
import { Link } from "react-router-dom";

function Register() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
          <h1>Register</h1>
        </div>
        <form className={Styles.formContainer}>
          <input
            type="text"
            name="name"
            className={Styles.input}
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
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
          <input
            type="password"
            name="confirmPassword"
            className={Styles.input}
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className={Styles.blueBtn}>
            Register
          </button>
        </form>
        <div className={Styles.loginPart}>
          <h4>Have an account ?</h4>
          <Link to="/login">
            <button className={Styles.whiteBtn} type="button">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
