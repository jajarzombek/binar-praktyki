import React from "react";
import Button from "../user-interface/Button";
class PostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ""
		};
	}

	updateName = e => {
		this.setState({
			title: e.target.value
		});
	};
	updateName2 = e => {
		this.setState({
			text: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.onSubmit({
			title: this.state.title,
			text: this.state.text
		});
	};

	render() {
		return (
			<div className="text-center">
				<form className="form-group">
					<label>Title: </label>
					<input
						className="form-control"
						onChange={this.updateName}
						type="text"
						value={this.state.title}
					/>

					<label>Text: </label>
					<input
						className="form-control"
						onChange={this.updateName2}
						type="text"
						value={this.state.text}
					/>
					<br />
					<Button
						onClick={this.onSubmit}
						label={"Add post"}
						className="btn-danger"
					/>
				</form>
			</div>
		);
	}
}

export default PostForm;
