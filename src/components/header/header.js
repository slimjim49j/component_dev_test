import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "./abc_logo.svg";

import "./header.css";

function Header({ pages }) {
    const location = useLocation();

    return (
        <header>
            <div className="header-left">
                <Logo />
                <div className="nav-links">
                    {
                        pages.map(({ title, slug }) => (
                            <Link to={`/${slug}`}
                                className={(location.pathname === `/${slug}` ? "selected" : "")}
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