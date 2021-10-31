import React, { useState } from "react";
import { useHistory } from "react-router";

import logo from "../img/Logo.svg";
import girl from "../img/UserTestimonial.svg";

import "./signUpAndLogin.css";

// * sl means sign and login!
export const SignUpAndLogin = ({
    clickHandler,
    placeholder,
    btnName,
    toOtherText,
    toOtherRoute,
    inHandler,
}) => {
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const history = useHistory();

    const goBackSearch = () => {
        history.push(`/search`);
    };

    return (
        <div className="sl-container">
            <div className="sl-content-container">
                <div className="sl-content">
                    <div className="sl-head">
                        <img src={logo} alt="" />
                        <div onClick={goBackSearch}>
                            <i
                                className="fas fa-long-arrow-alt-left"
                                style={{
                                    marginRight: 5,
                                }}
                            ></i>

                            <span className="backToCamp">
                                Back to Campgrounds
                            </span>
                        </div>
                    </div>
                    <h1 className="sl-main-text">
                        Start exploring camps from all around the world.
                    </h1>
                    <div className="sl-input-form">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            className="sl-input"
                            placeholder="johndoe_91"
                            required
                            autoFocus
                            value={inputName}
                            onChange={(e) => {
                                setInputName(e.target.value);
                            }}
                        />

                        <label htmlFor="pwd">Passowrd</label>
                        <input
                            id="pwd"
                            type="password"
                            className="sl-input"
                            placeholder={placeholder}
                            required
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                        />

                        <button
                            style={{ width: "100%" }}
                            className="global-btn"
                            onClick={() =>
                                clickHandler(inputName, inputPassword)
                            }
                        >
                            {btnName}
                        </button>
                    </div>
                    <div>
                        <span className="goToText">{toOtherText}</span>

                        <span
                            onClick={inHandler}
                            style={{ color: "#0059ff", cursor: "pointer" }}
                            className="goToRoute"
                        >
                            {toOtherRoute}
                        </span>
                    </div>
                </div>
            </div>

            <div className="sl-quote-container">
                <div className="quote-info">
                    <h2 className="quote">
                        <span className="double-quotes">&#8220;</span>
                        YelpCamp has honestly saved me hours of research time,
                        and the camps on here are definitely well picked and
                        added.
                        <span className="double-quotes">&#8221;</span>
                    </h2>
                    <div className="quote-poster">
                        <img src={girl} alt="" />
                        <div>
                            <h4>May Andrews</h4>
                            <div className="quote-poster-name">
                                Professional Hiker
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
