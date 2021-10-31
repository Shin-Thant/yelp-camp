import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import logo from "../img/Logo.svg";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { statusLogOut } from "../redux/actions/userAction";
import { removeCamp } from "../redux/actions/campAction";
import { removeComment } from "../redux/actions/commentsAction";

export const Navbar = () => {
    const { status, name } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const history = useHistory();

    const logOut = () => {
        dispatch(removeCamp());
        dispatch(removeComment());
        dispatch(statusLogOut());
        history.push("/");
    };

    const [menuStatus, setMenuStatus] = useState(false);
    function hamburgerAni() {
        setMenuStatus(!menuStatus);
    }

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div>
                    <Link to="/">
                        <img src={logo} alt="" style={{ cursor: "pointer" }} />
                    </Link>
                    <Link to="/">
                        <button className="link-btn home-link">Home</button>
                    </Link>
                </div>
                <div>
                    {status ? (
                        <>
                            <h3 className="user-name">{name}</h3>

                            <button
                                onClick={logOut}
                                className="link-btn logout-link"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login/fromNavbar">
                                <button className="link-btn login-link">
                                    Login
                                </button>
                            </Link>

                            <Link to="/signUp/fromNavbar">
                                <button className="global-btn create-acc">
                                    Create an account
                                </button>
                            </Link>
                        </>
                    )}
                </div>
                <div
                    onClick={hamburgerAni}
                    className={menuStatus ? "hamburger open" : "hamburger"}
                >
                    <div className="hamburger-icon"></div>
                </div>
            </div>
            <div className={menuStatus ? "nav-links menuOpen" : "nav-links"}>
                <Link to="/">
                    <button className="link-btn res-btn">Home</button>
                </Link>

                {status ? (
                    <>
                        <h3>{name}</h3>
                        <div>
                            <button
                                onClick={logOut}
                                className="link-btn res-logOut"
                            >
                                Logout
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <Link to="/login/fromNavbar">
                                <button className="link-btn ">Login</button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/signUp/fromNavbar">
                                <button className="res-login">
                                    Create an account
                                </button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
