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
import Register from "./session/Register";
// import "./App.css";

//const {title: ' tytul', timestamp: newDate().toString}

class App extends Component {
  authenticateUser = (nextState, replace) => {
    const state = this.props.store.getState();
    if (!state.session.token) {
      replace({
        pathname: "post-login"
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path="/" component={Layout} onEnter={this.authenticateUser}>
            <IndexRoute component={Home} />
            <Route path="posts" component={PostsPage} />
            <Route path="post-form" component={AddPostPage} />
            <Route path="posts-details/:id" component={PostsDetails} />
          </Route>
          <Route path="post-login" component={Login} />
          <Route path="register" component={Register} />
        </Router>
      </div>
    );
  }
}

export default App;
