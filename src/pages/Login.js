import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { SignUpAndLogin } from "../components/SignUpAndLogin";
import { statusLogIn } from "../redux/actions/userAction";

export const Login = ({ match }) => {
    const fromRoute = match.params.from;

    const { name, pwd } = useSelector((state) => state.user);

    const history = useHistory();

    const dispatch = useDispatch();

    const clickHandler = (inputName, inputPassword) => {
        if (inputName && inputPassword) {
            if (inputName === name && inputPassword === pwd) {
                dispatch(statusLogIn());
                if (fromRoute === "fromNavbar") {
                    history.push("/search");
                } else if (fromRoute === "fromDetails") {
                    history.push("/leaveComment");
                } else if (fromRoute === "fromSearch") {
                    history.push("/addCampgroup");
                }
            } else {
                alert("wrong username and pwd");
                console.log(name, pwd);
            }
        } else {
            alert("Enter Username and Password");
        }
    };

    const inHandler = () => {
        history.push(`/signUp/${fromRoute}`);
    };

    return (
        <SignUpAndLogin
            clickHandler={clickHandler}
            placeholder="Enter Your Password"
            btnName="Login"
            toOtherText="Not a user yet?"
            toOtherRoute="Create an account"
            inHandler={inHandler}
        />
    );
};
