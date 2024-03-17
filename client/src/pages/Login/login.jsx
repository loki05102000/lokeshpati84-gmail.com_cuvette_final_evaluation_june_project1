import React, { useState } from "react";
import Styles from "./login.module.css";
import image from "../../assets/images/image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8000/login", data);
      // const token = response.data.token;
      alert("login successful");
      navigate("/dashboard");
      // window.location.reload();
      // localStorage.setItem("token", token);
      // .then((response) => console.log(response))
    } catch (error) {
      console.log(error);
    }
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
        <form className={Styles.formContainer} onSubmit={handleSubmit}>
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
