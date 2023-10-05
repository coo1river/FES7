import goodsReducer from "./goodsCounter";
import stockReducer from "./stockCounter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  goodsReducer,
  stockReducer,
});
// 가나다라마바사
export default rootReducer;
