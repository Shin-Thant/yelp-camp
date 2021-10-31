import React, { useEffect, useState } from "react";
import "./details.css";
import map from "../img/Map.png";
import { Navbar } from "../components/Navbar";
import { Comments } from "../components/Comments";
import commentIcon from "../img/ChatBubble.svg";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { CommentsData } from "../Data/CommentsData";

export const DetailsPage = ({ match }) => {
    // const place = useSelector((state) => state.place.name);
    const camps = useSelector((state) => state.camp);
    const userStatus = useSelector((state) => state.user.status);

    const history = useHistory();

    const [data, setData] = useState({
        name: "",
        img: "",
        price: "",
        desc: "",
    });

    function addData() {
        camps.map((camp) => {
            if (camp.name === match.params.name) {
                setData({
                    name: camp.name,
                    img: camp.img,
                    price: camp.price,
                    desc: camp.desc,
                });
            }
            return "done";
        });
    }

    useEffect(() => {
        addData();
        // eslint-disable-next-line
    }, []);

    const goToComment = () => {
        if (userStatus) {
            history.push("/leaveComment");
        } else {
            history.push("/login/fromDetails");
        }
    };

    return (
        <div className="details-container">
            <Navbar />
            <div className="details-main">
                <div className="details-content-container">
                    <div className="about-place">
                        <img src={data.img} alt="" />
                        <div className="name-price">
                            <h3>{data.name}</h3>
                            <p>
                                ${data.price}
                                /night
                            </p>
                        </div>
                        <p>{data.desc}</p>
                        <div className="submit-person">
                            <em>Submitted by Andrew Mike</em>
                        </div>
                    </div>
                    <div className="comments-container">
                        {CommentsData.map((item) => (
                            <Comments
                                key={item.id}
                                name={item.name}
                                time={item.time}
                                comment={item.comment}
                            />
                        ))}
                        <button
                            onClick={goToComment}
                            className="global-btn"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={commentIcon}
                                alt=""
                                style={{ marginRight: 10 }}
                            />
                            Leave a Review
                        </button>
                    </div>
                </div>
                <div className="details-map-container">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};
