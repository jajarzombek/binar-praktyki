import React from "react";
import Button from "../user-interface/Button";
//import AlertButton from "../user-interface/AlertButton";
import styled from "styled-components";

class Post extends React.Component {
	remove = () => {
		this.props.onRemove(this.props.timestamp);
	};

	render() {
		let postDate = new Date(this.props.timestamp).toString().substring(0, 25);
		return (
			<StyledPost>
				<StyledDiv>
					<div className="container-fluid">
						<label>Title: </label>
						{this.props.title}
					</div>
					<div className="container-fluid">
						<label>Timestamp:</label>
						{postDate}
						{}
					</div>
					<div className="container-fluid">
						<label>Text:</label> {this.props.text}
					</div>
				</StyledDiv>
				<StyledDiv>
					{/* <Button
						onClick={this.remove}
						label="Remove"
						className="btn-success btn-lg btn-block"
					/> */}
					<i
						onClick={this.remove}
						className="fa fa-times fa-3x"
						style={{ color: "#c94c4c" }}
						fontaria-hidden="true"
					/>
				</StyledDiv>
			</StyledPost>
		);
	}
}

class PostList extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				{this.props.posts.map(p =>
					<ul style={{ padding: 0 }}>
						<Post
							title={p.title}
							timestamp={p.timestamp}
							text={p.text}
							key={p.timestamp}
							onRemove={this.props.onRemove}
						/>
					</ul>
				)}
				{/* <div>
					<AlertButton onClick={alert("klik")} label="klik" />
				</div> */}
			</div>
		);
	}
}

const StyledPost = styled.div`
	border: 1px solid #aaa;
	background-color: #eee;
	margin: 5px;
	padding: 5px;
	display: flex;
	justify-content: space-between;
	&:hover {
		opacity: 0.7;
	}
`;

const StyledDiv = styled.div`justify-content: space-between;`;

const StyledPostList = styled(PostList)`
	margin-top: 10px;
`;

// const Button = styled.button`border: none;`;
//
// const AlertButton = Button.extend``;
export { PostList, Post };
