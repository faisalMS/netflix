import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img className="nav_logo" src="Netflix-logo.png" />

        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        />
      </div>

      <h1>This is the Nav</h1>
    </div>
  );
}

export default Nav;
