import { combineReducers } from "redux";
import search_sec from "./reducer";
export default combineReducers({
  movies: search_sec,
});
