import React, { useState } from "react";
import "./addCampgroup.css";
import { Navbar } from "../components/Navbar";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addNewCamp } from "../redux/actions/campAction";

export const AddCampgroup = () => {
    const [campName, setCampName] = useState("");
    const [price, setPrice] = useState("");
    const [campImg, setCampImg] = useState("");
    const [desc, setDesc] = useState("");

    const history = useHistory();

    const dispatch = useDispatch();

    const clickHandler = () => {
        if (campName && price && campImg && desc) {
            dispatch(addNewCamp(campName, price, campImg, desc));
            history.push("/search");
        }
    };

    const addImg = (e) => {
        let photo = e.target.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", (event) => {
            setCampImg(reader.result);
        });
        reader.readAsDataURL(photo);
    };
    return (
        <div className="addCamp-container">
            <Navbar />
            <div className="addCamp-form-container">
                <div className="addCamp-form">
                    <h1>Add New Campgroup</h1>
                    <div>
                        <p>Campgroup Name</p>
                        <input
                            onChange={(e) => setCampName(e.target.value)}
                            value={campName}
                            type="text"
                            placeholder="Seven Sisters Waterfall"
                            className="inputs"
                        />

                        <p>Price</p>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            type="number"
                            placeholder="$149"
                            className="inputs"
                            accept="image/*"
                        />

                        <p>Image</p>
                        <input
                            onChange={addImg}
                            type="file"
                            className="inputs input-file"
                        />

                        <p>Description</p>
                        <textarea
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                            max="100"
                            className="inputs"
                            placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in More og Romsdal county, Norway."
                        ></textarea>
                    </div>
                    <button
                        onClick={clickHandler}
                        style={{ width: "100%", marginBottom: 25 }}
                        className="global-btn"
                    >
                        Add Campgroup
                    </button>
                </div>
            </div>
        </div>
    );
};
