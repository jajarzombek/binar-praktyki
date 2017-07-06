import React from "react";

class Post extends React.Component {
	render() {
		return (
			<div>
				<p>
					title: {this.props.title}
				</p>
				<h3>
					timestamp: {this.props.timestamp}
				</h3>
				<span>
					text: {this.props.text}
				</span>
			</div>
		);
	}
}

export default Post;
