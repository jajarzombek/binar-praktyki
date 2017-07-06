import React from "react";
import PostForm from "./PostForm";
import { PostList, Post } from "./PostList";
import { connect } from "react-redux";
import ParityList from "./ParityList";
class PostsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchPrase: ""
		};
		//this.logDate = this.logDate.bind(this);
		this.addPost = this.addPost.bind(this);
	}

	//zbonduje sie automatycznie - wynika z konfiguracji projektu
	addPost = post => {
		this.setState({
			posts: [...this.state.posts, { ...post, timestamp: new Date().getTime() }]
		});
		this.props.counter(this.state.posts.length);
	};

	removePost = timestamp => {
		this.setState({
			posts: this.state.posts.filter(p => p.timestamp !== timestamp)
		});
		this.props.counter(this.state.posts.length);
	};

	searchPost = event => {
		this.setState({
			searchPrase: event.target.value
		});
	};

	// update = () => {
	// 	this.props.counter(this.state.posts.length);
	// };
	render() {
		const postsToRender = this.props.posts.filter(p =>
			p.title.includes(this.state.searchPrase)
		);

		const countPosts = this.props.posts.length;

		return (
			<div className="container-fluid">
				<div>
					<div onClick={this.update}>Aktualizuj liczbę postów </div>
					{/* Post counter: {countPosts} */}
				</div>
				<PostForm onSubmit={this.addPost} />
				<div className="container-fluid">
					<label className="">Search: </label>
					<input
						className="form-control"
						onChange={this.searchPost}
						value={this.state.searchPrase}
					/>
					<PostList posts={postsToRender} onRemove={this.removePost} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};
export default connect(mapStateToProps)(PostsPage);
