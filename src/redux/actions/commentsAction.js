export const addComment = (id, name, time, comment, placeName) => {
    return {
        type: "ADD_COMMENT",
        payload: {
            id,
            name,
            time,
            comment,
            placeName,
        },
    };
};

export const removeComment = () => {
    return {
        type: "REMOVE_COMMENT",
    };
};
