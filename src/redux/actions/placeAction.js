export const addPlace = (name) => {
    return {
        type: "ADD_PLACE",
        payload: name,
    };
};
