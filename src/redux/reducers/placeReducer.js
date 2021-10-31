export const placeReducer = (state = { name: "" }, action) => {
    switch (action.type) {
        case "ADD_PLACE":
            return { name: action.payload };
        default:
            return state;
    }
};
