import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {


  return (
    <div className="header header_style">
      <div className="header_name ">
       <Link to="/" ><h3 className="text_style"> Vee-Kay ViLibrary </h3></Link>
        <input className="input_box" type="text" placeholder="Enter text.." />
      </div>
      <div className="header_subcontents">
        <Link to="/loginpage">
        <button className="btn btn-default" id="btn-style">Login</button>
        </Link>

      </div>
    </div>
  );
}

export default Nav;
