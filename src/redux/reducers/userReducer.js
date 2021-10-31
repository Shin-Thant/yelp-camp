let originalName = "shin";
let originalPwd = "shinishandsome3000";

export const userReducer = (
    state = { status: false, name: originalName, pwd: originalPwd },
    action
) => {
    switch (action.type) {
        case "LOG_IN":
            return { ...state, status: true };
        case "SIGN_IN":
            originalName = action.payload.name;
            originalPwd = action.payload.pwd;
            return {
                status: true,
                name: action.payload.name,
                pwd: action.payload.pwd,
            };
        case "LOG_OUT":
            return { status: false, name: originalName, pwd: originalPwd };

        default:
            return state;
    }
};
