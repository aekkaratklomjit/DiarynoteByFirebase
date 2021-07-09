import { combineReducers } from "redux";
import RealtimeBlogReducer from "./RealtimeBlogReducer";
import LoadingReducer from "./LoadingReducer";
import FirestoreBlogReducer from "./FirestoreBlogReducer";

const rootReducer = combineReducers({
    blogsListFirestore : FirestoreBlogReducer,
    blogsListRealtime : RealtimeBlogReducer,
    loadingReducer:LoadingReducer,
})

export default rootReducer;




// import { combineReducers } from "redux";
// import BlogReducer from "./BlogReducer";

// const rootReducer = combineReducers({
//     blogList : BlogReducer
// })
// export default rootReducer;