import React from "react";
import PostForm from "./PostForm";
import { PostList, Post } from "./PostList";
import { connect } from "react-redux";
import ParityList from "./ParityList";
import { withRouter } from "react-router";

class AddPostPage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	addPost = post => {
		this.props.dispatch({
			type: "ADDPOST",
			data: { ...post, timestamp: new Date().getTime() }
		});
		//przejscie do strony posts
		this.props.router.push("posts");
	};

	render() {
		console.log(this.props);
		return <PostForm onSubmit={this.addPost} />;
	}
}
const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(withRouter(AddPostPage));
