export const addNewCamp = (name, price, img, desc) => {
    return {
        type: "ADD_CAMPGROUP",
        payload: {
            name,
            price,
            img,
            desc,
        },
    };
};

export const removeCamp = () => {
    return {
        type: "REMOVE_CAMPGROUP",
    };
};
