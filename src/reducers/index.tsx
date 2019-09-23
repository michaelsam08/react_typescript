import { combineReducers } from "redux";
import getUserListReducer from "./getUserListReducer";
import getPostReducer from "./getPostReducer";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface AppState {
  users: Object[];
  posts: Post[];
}

export default combineReducers<AppState>({
  users: getUserListReducer,
  posts: getPostReducer
});
