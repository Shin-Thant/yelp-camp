import { camps } from "../../Data/CardsData";

export const campReducer = (state = [...camps], action) => {
    switch (action.type) {
        case "ADD_CAMPGROUP":
            return [...state, action.payload];
        case "REMOVE_CAMPGROUP":
            return [...camps];
        default:
            return state;
    }
};
