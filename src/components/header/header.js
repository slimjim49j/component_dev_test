import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "./abc_logo.svg";

import "./header.css";

/*
 * The Header uses useLocation to detect changes in the url path to update the
 * corresponding navigation link
 */
function Header({ pages }) {
  const { pathname } = useLocation();

  return (
    <header>
      <div className="header-left">
        <Logo />
        <div className="nav-links">
          {
            pages.map(({ title, slug }) => (
              <Link to={`/${slug}`}
                className={(pathname === `/${slug}` ? "selected" : "")}
                key={slug}
              >
                {title}
              </Link>
            ))
          }
        </div>
      </div>
      <button className="contact-btn">
        Contact Us
      </button>
    </header>
  );
}

export default Header;