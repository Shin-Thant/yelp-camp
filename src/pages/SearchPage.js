import React from "react";

import { Navbar } from "../components/Navbar";
import "./SearchPage.css";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const SearchPage = () => {
    const camps = useSelector((state) => state.camp);
    const { status } = useSelector((state) => state.user);
    return (
        <div className="search-container">
            <Navbar />
            <div className="search-card">
                <h1>Welcome to YelpCamp!</h1>
                <p>
                    View our hand-picked campgrounds from all over the world, or
                    add your own.
                </p>
                <div className="search-input-box">
                    <div className="search-input">
                        <input
                            type="text"
                            placeholder="&#128269; Search for camps"
                        />
                    </div>
                    <button className="global-btn">Search</button>
                </div>
                <Link to={status ? "/addCampgroup" : "/login/fromSearch"}>
                    <button style={{ display: "block" }} className="link">
                        Or add your own campground
                    </button>
                </Link>
            </div>

            <div className="card-container">
                {camps.map((camp) => (
                    <Card
                        key={camp.img}
                        name={camp.name}
                        img={camp.img}
                        desc={camp.desc}
                    />
                ))}
            </div>
        </div>
    );
};
