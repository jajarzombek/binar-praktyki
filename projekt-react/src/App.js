import React, { Component } from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import Layout from "./Layout";
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router";
import PostsPage from "./posts/PostsPage";

import Home from "./Home";
import PostsDetails from "./posts/PostsDetails";
import AddPostPage from "./posts/AddPostPage";
import Login from "./session/Login";
// import "./App.css";

//const {title: ' tytul', timestamp: newDate().toString}

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router history={hashHistory}>
					<Route path="/" component={Layout}>
						<IndexRoute component={Home} />
						<Route path="posts" component={PostsPage} />
						<Route path="post-form" component={AddPostPage} />
						<Route path="posts-details" component={PostsDetails} />
						<Route path="post-login" component={Login} />
					</Route>
				</Router>
			</div>
		);
	}
}

export default App;
