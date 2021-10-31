export const statusSingIn = (name, pwd) => {
    return {
        type: "SIGN_IN",
        payload: { name, pwd },
    };
};

export const statusLogIn = () => {
    return {
        type: "LOG_IN",
    };
};

export const statusLogOut = () => {
    return {
        type: "LOG_OUT",
    };
};
