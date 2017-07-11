import React from "react";
import PostForm from "./PostForm";

import { connect } from "react-redux";

import apiClient from "../lib/api-client";
import { withRouter } from "react-router";

class AddPostPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  addPost = post => {
    apiClient
      .post(
        "/example/api/v1/posts",
        {
          post: {
            title: post.title,
            body: post.text,
            user_id: this.props.session.user_id
          }
        },
        {
          headers: {
            "X-User-Email": this.props.session.email,
            "X-User-Token": this.props.session.token
          }
        }
      )
      .then(response => {
        console.log(response);

        //przejscie do strony posts
        this.props.router.push("posts");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props);
    return <PostForm onSubmit={this.addPost} />;
  }
}
const mapStateToProps = state => {
  return {
    session: state.session
  };
};

export default connect(mapStateToProps)(withRouter(AddPostPage));
