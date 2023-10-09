import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="links" to="/">
        Copyrights
      </Link>
      <Link className="links" to="/">
        World of Warcraft Community
      </Link>
    </div>
  );
};

export default Footer;
