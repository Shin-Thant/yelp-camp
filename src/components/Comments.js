import React from "react";
import "./comment.css";

export const Comments = ({ name, time, comment }) => {
    return (
        <div className="comment">
            <div className="name-time">
                <h4>{name}</h4>
                <p>{time}</p>
            </div>
            <p>{comment}</p>
        </div>
    );
};
