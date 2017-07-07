import { createStore, combineReducers } from "redux";
import { counter, posts } from "./reducers/posts";
import session from "./reducers/session";

//polaczone reducery
const rootReducer = combineReducers({
	posts: posts,
	counter: counter,
	session: session
});

const store = createStore(rootReducer);

export default store;
