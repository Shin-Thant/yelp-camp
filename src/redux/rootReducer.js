import { combineReducers } from "redux";
import { campReducer } from "./reducers/campReducer";
import { commentsReducer } from "./reducers/commentsReducer";
import { placeReducer } from "./reducers/placeReducer";
import { userReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    place: placeReducer,
    camp: campReducer,
    comments: commentsReducer,
});
