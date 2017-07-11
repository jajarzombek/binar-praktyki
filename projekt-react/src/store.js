import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counter, posts } from "./posts/postsReducer";
import session from "./session/sessionReducer";
import persistState from "redux-localstorage";
//polaczone reducery

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session
});
const enhancer = compose(applyMiddleware(thunk), persistState("session"));
const store = createStore(rootReducer, {}, enhancer);

export default store;
