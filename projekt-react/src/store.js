import { compose, createStore, combineReducers } from "redux";
import { counter, posts } from "./posts/postsReducer";
import session from "./session/sessionReducer";
import persistState from "redux-localstorage";
//polaczone reducery

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session
});
const enhancer = compose(persistState("session"));
const store = createStore(rootReducer, {}, enhancer);

export default store;
