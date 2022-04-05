import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import axios from "axios";
import{ Nav} from '../../components/Nav/Nav'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const loginClickHandler = async (e) => { 
    const password = pass;
    e.preventDefault();
    try{
      const resp = await axios.post("/api/auth/login",
      { email,
        password})
      localStorage.setItem("token",resp.data.encodedToken)
      localStorage.setItem("user",JSON.stringify(resp.data.foundUser))
      dispatch({ type: "SUCCESS", payload:resp.data.encodedToken})
      navigate("/videos")
      console.log(resp)
    } catch(err){
      alert(`${err} || Enter Correct Email or Password`)

    }
  }

  const loginDummyClickHandler = async (e) => { 
    e.preventDefault();
    try{
      const resp = await axios.post("/api/auth/login",
      { email: "adarshbalika@gmail.com",
        password: "adarshBalika123"})
      localStorage.setItem("token",resp.data.encodedToken)
      localStorage.setItem("user",JSON.stringify(resp.data.foundUser))
      dispatch({ type: "SUCCESS", payload:resp.data.encodedToken})
      navigate("/videos")
    } catch(err){
      alert(`Error From Server : ${err}`)
    }
  }

  return (
    <div className="container_login">
      <Nav />
      <div className="main_container">
        <div className="form_container">
          <form className="form">
            <div className="form_header">
              <h3>Login</h3>
            </div>
            <div className="input_textbox ">
              <label className="form_label">Email Address:</label>
              <input
                className="input_box login_textbox"
                type="email"
                required
                placeholder="vikrant2812@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="input_textbox ">
              <label className="form_label">password:</label>
              <input
                className="input_box login_textbox"
                type="password"
                required
                placeholder="**********"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
            </div>
            <ul className="list">
              <li className="normal_list login_list">
                <label>
                  <input className="checkbox_list" type="checkbox" />
                  Remember Me
                </label>
                <Link to="" className="login_form_link forgot_pwd_link">
                  Forgot Your Password?
                </Link>
              </li>
            </ul>
            <div className="form_submit_btn">
              <button
                className="btn btn-default"
                type="submit"
                onClick={loginClickHandler}
              >
                Login
              </button>
              <div>
                <button
                  className="btn btn-default"
                  type="submit"
                  onClick={loginDummyClickHandler}
                >
                  Login with Existing Credentials
                </button>
              </div>
              <p>
                <Link to="" className="login_form_link">
                  Create an Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
