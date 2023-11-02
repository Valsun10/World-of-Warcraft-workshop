import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer-links" to="/">
        Copyrights
      </Link>
      <Link className="footer-links" to="/">
        World of Warcraft Community
      </Link>
    </div>
  );
};

export default Footer;
