import { combineReducers } from "redux";
import BlogReducer from "./BlogReducer";
import LoadingReducer from "./LoadingReducer";
import BlogReducerFirestore from "./BlogReducerFirestore";

const rootReducer = combineReducers({
    blogsListFirestore : BlogReducerFirestore,
    blogsList : BlogReducer,
    loadingReducer:LoadingReducer,
})

export default rootReducer;




// import { combineReducers } from "redux";
// import BlogReducer from "./BlogReducer";

// const rootReducer = combineReducers({
//     blogList : BlogReducer
// })
// export default rootReducer;