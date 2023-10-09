import React from "react";
import "./Header.css";
import Logo from "../Header/world-of-warcraft.svg";
import profilepic from "../../assets/imgs/profilepic.jpg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Header = () => {
  const { user, onLogout } = useAuthContext();

  const adminLinks = (
    <>
      <Link className="links" to={"/createRace"}>
        Create Race
      </Link>
      <Link className="links" to={"/createClass"}>
        Create Class
      </Link>
      <Link className="links" to="/create">
        Create Hero
      </Link>
      <Link className="links" to="/login" onClick={onLogout}>
        Logout
      </Link>
    </>
  );

  const userLinks = (
    <>
      <Link className="links" to="/create">
        Create Hero
      </Link>
      <Link className="links" to="/login" onClick={onLogout}>
        Logout
      </Link>
    </>
  );

  const guestNav = (
    <div className="nav">
      <div className="left-nav">
        <Link className="links" to="/">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="right-nav">
        <Link className="links" to="/login">
          Log in
        </Link>
        <Link className="links" to="/register">
          Register
        </Link>
      </div>
    </div>
  );

  const userNav = (
    <div className="nav">
      <div className="left-nav">
        <Link className="links" to="/">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="right-nav">
        <p style={{ color: "white", fontSize: "19px" }}>Welcome {user.email}</p>
        <Link className="links" to="/profile">
          <img
            src={profilepic}
            alt="profile-pic"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </Link>
        {user.role === "admin" ? adminLinks : userLinks}
      </div>
    </div>
  );

  const headerNav = user.email ? userNav : guestNav;

  return <div className="header">{headerNav}</div>;
};

export default Header;
