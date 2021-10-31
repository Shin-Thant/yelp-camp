import React from "react";
import "./card.css";

import { addPlace } from "../redux/actions/placeAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export const Card = ({ img, name, desc }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const goDetails = () => {
        dispatch(addPlace(name));
        history.push(`/details/${name}`);
    };

    return (
        <div className="card">
            <img src={img} alt="" className="card-img" />
            <h4>{name}</h4>
            <p>{desc}</p>

            <button onClick={goDetails} className="card-btn">
                View Campground
            </button>
        </div>
    );
};
