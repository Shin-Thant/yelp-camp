import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";
import logo from "../img/Logo.svg";
import checkMark from "../img/Checkmark.svg";
import airbnb from "../img/Airbnb.svg";
import booking from "../img/Booking.svg";
import plumGuide from "../img/Plum Guide.svg";

const Points = ({ children }) => {
    return (
        <div className="points">
            <img src={checkMark} alt="" />
            <div className="home-text">{children}</div>
        </div>
    );
};

export const HomePage = () => {
    return (
        <div className="home-container">
            <img src={logo} alt="" className="home-logo" />
            <div className="home-main">
                <div className="home-main-img"></div>

                <div className="home-content-container">
                    <div className="home-content">
                        <h1 className="home-main-text">
                            Explore the best camps on Earth.
                        </h1>
                        <div className="home-text">
                            YelpCamp is a curated list of the best camping spots
                            on Earth. Unfiltered and unbiased reviews.
                        </div>
                        <div style={{ marginTop: 15, marginBottom: 20 }}>
                            <Points>Add your own camp suggestions.</Points>
                            <Points>Leave reviews and experiences.</Points>
                            <Points>See locations for all camps.</Points>
                        </div>

                        <Link to="/search">
                            <button className="global-btn">
                                View Campgrounds
                            </button>
                        </Link>

                        <div style={{ fontWeight: "500", marginTop: 30 }}>
                            Partnered with:
                        </div>

                        <div className="partners">
                            <img src={airbnb} alt="" />
                            <img src={booking} alt="" />
                            <img src={plumGuide} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
