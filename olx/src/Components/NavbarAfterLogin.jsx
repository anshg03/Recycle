import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>O</span>lx
                    </h2>
                </div>
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }
                >
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">UserName</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <div>
                        <ul className="social-media-desktop">
                            <li>
                                <input
                                    placeholder="Search"
                                    variant="filled"
                                    className="input"
                                />
                            </li>
                        </ul>
                        {/* hamburger menu start  */}
                        <div className="hamburger-menu">
                            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                <GiHamburgerMenu />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
