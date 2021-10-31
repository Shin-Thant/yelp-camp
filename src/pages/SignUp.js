import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { SignUpAndLogin } from "../components/SignUpAndLogin";
import { statusSingIn } from "../redux/actions/userAction";

export const SignUp = ({ match }) => {
    const fromRoute = match.params.from;

    const history = useHistory();
    const dispatch = useDispatch();

    const clickHandler = (inputName, inputPassword) => {
        if (inputName && inputPassword) {
            dispatch(statusSingIn(inputName, inputPassword));
            if (fromRoute === "fromNavbar") {
                history.push("/search");
            } else if (fromRoute === "fromDetails") {
                history.push("/leaveComment");
            } else if (fromRoute === "fromSearch") {
                history.push("/addCampgroup");
            }
        } else {
            alert("Enter Username and Password");
        }
    };

    const inHandler = () => {
        history.push(`/login/${fromRoute}`);
    };

    return (
        <SignUpAndLogin
            clickHandler={clickHandler}
            placeholder="Choose Password"
            btnName="Create an account"
            toOtherText="Already a user?"
            toOtherRoute="Sign in"
            inHandler={inHandler}
        />
    );
};
