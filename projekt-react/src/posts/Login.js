import React from "react";
import PostForm from "./PostForm";
import { PostList, Post } from "./PostList";
import { connect } from "react-redux";
import ParityList from "./ParityList";
import { withRouter } from "react-router";
import Button from "../user-interface/Button";
import axios from "axios";

class Login extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	// addPost = post => {
	// 	this.props.dispatch({
	// 		type: "ADDPOST",
	// 		data: { ...post, timestamp: new Date().getTime() }
	// 	});
	// 	//przejscie do strony posts
	// 	this.props.router.push("posts");
	// };
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			error: ""
		};
	}

	updateName = e => {
		this.setState({
			email: e.target.value
		});
	};

	updateName2 = e => {
		this.setState({
			password: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		// this.props.onSubmit({
		// 	title: this.state.title,
		// 	text: this.state.text
		// });
		axios
			.post("http://192.168.10.127:3001/sign-in", {
				//dane z naszego formularza w postaci obiektu
				//axios post zwraca promise
				email: this.state.email,
				password: this.state.password
			})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
				this.setState({
					error: "Coś poszło nie tak"
				});
			});

		// this.props.dispatch({
		// 	type: "LOGIN",
		// 	data: { email: this.state.email, password: this.state.password }
		// });
		// //przejscie do strony posts
		// this.props.router.push("posts");
	};
	showError = () => {};

	render() {
		//console.log(this.props);
		return (
			<div className="text-center">
				<form className="form-group">
					<label>Mail: </label>
					<input
						className="form-control"
						onChange={this.updateName}
						type="email"
						value={this.state.email}
					/>

					<label>Password: </label>
					<input
						className="form-control"
						onChange={this.updateName2}
						type="password"
						value={this.state.password}
					/>
					<br />
					<Button
						onClick={this.onSubmit}
						label={"Login"}
						className="btn-danger"
					/>
					<h2>
						{this.state.error}
					</h2>
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(withRouter(Login));
