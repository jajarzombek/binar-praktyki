import { createStore, combineReducers } from "redux";
import { counter, posts } from "./posts/postsReducer";
import session from "./session/sessionReducer";

//polaczone reducery
const rootReducer = combineReducers({
	posts: posts,
	counter: counter,
	session: session
});

const store = createStore(rootReducer);

export default store;
