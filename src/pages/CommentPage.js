import React, { useState } from "react";
import "./comment.css";
import { Navbar } from "../components/Navbar";
import { useHistory } from "react-router";
import { CommentsData } from "../Data/CommentsData";
import { useSelector } from "react-redux";

export const CommentPage = () => {
    const place = useSelector((state) => state.place.name);
    const { name } = useSelector((state) => state.user);
    const [comment, setComment] = useState("");

    const history = useHistory();

    const commentAdded = () => {
        console.log(comment);
        CommentsData.push({
            id: CommentsData.length + 1,
            name: name,
            time: "now",
            comment,
        });
        history.push(`/details/${place}`);
    };
    return (
        <div className="leave-comment-container">
            <Navbar />
            <div className="leave-comment-main">
                <div className="leave-comment-content">
                    <h1 className="leave-comment-header">Add New Comment</h1>
                    <p>Description</p>
                    <textarea
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
                    />
                    <button
                        onClick={commentAdded}
                        className="global-btn"
                        style={{ width: "100%" }}
                    >
                        Post Comment
                    </button>
                </div>
            </div>
        </div>
    );
};
