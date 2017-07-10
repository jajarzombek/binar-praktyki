import React from "react";
import PostForm from "./PostForm";
import { PostList, Post } from "./PostList";
import { connect } from "react-redux";
import ParityList from "./ParityList";
import apiClient from "../lib/api-client";
import _ from "lodash";

import { withRouter } from "react-router";
class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPrase: ""
    };
    //this.logDate = this.logDate.bind(this);
    //this.addPost = this.addPost.bind(this);
  }

  //zbonduje sie automatycznie - wynika z konfiguracji projektu
  // addPost = post => {
  // 	this.props.dispatch({
  // 		type: "ADDPOST",
  // 		data: { ...post, timestamp: new Date().getTime() }
  // 	});
  // 	// this.setState({
  // 	// 	posts: [...this.state.posts, { ...post, timestamp: new Date().getTime() }]
  // 	// });
  // 	//this.props.counter(this.props.posts.length);
  // };

  removePost = postId => {
    // this.setState({
    // 	posts: this.state.posts.filter(p => p.timestamp !== timestamp)
    // });
    //dispatch
    // this.props.dispatch({
    //   type: "REMOVEPOST",
    //   data: timestamp
    // });

    apiClient
      .delete(
        "/example/api/v1/posts/" + postId
        // , {
        //   headers: {
        //     "X-User-Email": this.props.session.email,
        //     "X-User-Token": this.props.session.token
        //   }
        // }
      )
      .then(this.fetchPosts)
      .catch(error => {
        //  console.log(error);
      });

    //this.props.counter(this.props.posts.length);
  };

  fetchPosts = () => {
    apiClient
      .get(
        "/example/api/v1/posts"
        // , {
        //   headers: {
        //     "X-User-Email": this.props.session.email,
        //     "X-User-Token": this.props.session.token
        //   }
        // }
      )
      .then(response => {
        console.log(response);
        this.props.dispatch({
          type: "FETCH_POSTS",
          data: response.data.posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  showPost = key => {
    // this.props.dispatch({
    //   type: "SHOW_POST",
    //   data: timestamp
    // });
    this.props.router.push("posts-details/" + key);
  };

  searchPost = event => {
    this.setState({
      searchPrase: event.target.value
    });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const postsToRender = this.props.posts.postsCollection
      .filter(p => p.title.includes(this.state.searchPrase))
      .sort((a, b) => a.id - b.id)
      .reverse();

    const orderedPosts = _.orderBy(postsToRender, ["title"]);
    const countPosts = this.props.posts.length;

    return (
      <div className="container-fluid">
        <div>
          {/* <div onClick={this.update}>Aktualizuj liczbę postów </div> */}
          {/* Post counter: {countPosts} */}
        </div>
        {/* <PostForm onSubmit={this.addPost} /> */}
        <div className="container-fluid">
          <label className="">Search: </label>
          <input
            className="form-control"
            onChange={this.searchPost}
            value={this.state.searchPrase}
          />
          <PostList
            posts={orderedPosts}
            onRemove={this.removePost}
            onClick={this.showPost}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts,
    session: state.session
  };
};
export default connect(mapStateToProps)(withRouter(PostsPage));
