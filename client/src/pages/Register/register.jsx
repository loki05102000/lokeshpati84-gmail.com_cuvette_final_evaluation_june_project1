import React, { useState } from "react";
import Styles from "./register.module.css";
import image from "../../assets/images/image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [error, setError] = useState(false);
  // const [error1, setError1] = useState(false);
  // const [error2, setError2] = useState(false);
  // const [error3, setError3] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", data)
      .then(() => {
        alert("Registration Successful");
        navigate("/login");
      })
      .catch((error) => console.log(error));

    // if (data.name.length == 0) {
    //   setError(true);
    // } else if (data.email.length == 0) {
    //   setError1(true);
    // } else if (data.password.length == 0 && data.password.length <= 6) {
    //   setError2(true);
    // } else if (data.confirmPassword.length != 0) {
    //   if (data.confirmPassword == data.password) {
    //     setError3(false);
    //   } else {
    //     setError3(true);
    //   }
    // } else {

    // }
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
        <form className={Styles.formContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className={Styles.input}
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
          {/* {error ? <label htmlFor="Validation">Enter name</label> : ""} */}

          <input
            type="email"
            name="email"
            className={Styles.input}
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          {/* {error1 ? <label htmlFor="Validation">Enter Email</label> : ""} */}
          <input
            type="password"
            name="password"
            className={Styles.input}
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          {/* {error2 ? <label htmlFor="Validation">Enter password</label> : ""} */}
          <input
            type="password"
            name="confirmPassword"
            className={Styles.input}
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          {/* {error3 ? (
            <label htmlFor="Validation">Enter mached password</label>
          ) : (
            ""
          )} */}
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
