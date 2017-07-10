import React from "react";
import { connect } from "react-redux";
import apiClient from "../lib/api-client";
class PostsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }
  componentDidMount() {
    console.log(this.props);
    apiClient
      .get("/example/api/v1/posts/" + this.props.params.id)
      .then(response => {
        console.log(response);
        this.setState({
          post: response.data
        });
      })
      .catch(error => {});
  }
  render() {
    //console.log(this.props);

    return (
      <div className="container-fluid">
        <div className="container-fluid">
          {" "}<label>Title: </label>
          <p>{this.state.post.title}</p>
        </div>
        <div className="container-fluid">
          {" "}<label>Text: </label>
          <p>{this.state.post.body}</p>
          <small>created at: {this.state.post.created_at}</small>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    postToShow: state.posts.postToShow
  };
};
export default connect(mapStateToProps)(PostsDetails);
