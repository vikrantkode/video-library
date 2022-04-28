import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/context";

function Nav() {
  const {state,dispatch} = useAuth();
  const {isLoggedIn} = state;
  const logoutClickHandler = () =>{
    localStorage.clear();
    dispatch({type: 'LOGOUT'})
  }

  return (
    <div className="header header_style">
      <div className="header_name "> 
       <Link to="/" ><h3 className="text_style"> Vee-Kay ViLibrary </h3></Link>
        <input className="input_box" type="text" placeholder="Enter text.." />
      </div>
      <div className="header_subcontents">
      {isLoggedIn ? 
      <Link to="/login">
      <button className="btn btn-default" id="btn-style" onClick={logoutClickHandler}>Logout</button>
      </Link> :
      <Link to="/login">
      <button className="btn btn-default" id="btn-style">Login</button>
      </Link>}
      </div>
    </div>
  );
}

export  {Nav};
