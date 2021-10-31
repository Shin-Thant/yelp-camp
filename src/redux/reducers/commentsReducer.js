import { CommentsData } from "../../Data/CommentsData";

export const commentsReducer = (state = [...CommentsData], action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return [...state, action.payload];
        case "REMOVE_COMMENT":
            return [...CommentsData];
        default:
            return state;
    }
};
