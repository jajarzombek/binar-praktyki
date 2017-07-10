import React from "react";
import PostForm from "../posts/PostForm";
import { PostList, Post } from "../posts/PostList";
import { connect } from "react-redux";
import ParityList from "../posts/ParityList";
import { withRouter } from "react-router";
import Button from "../user-interface/Button";
import apiClient from "../lib/api-client";

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

    //console.log(this.state);
    apiClient
      .post("/api/v1/sessions", {
        //dane z naszego formularza w postaci obiektu
        //axios post zwraca promise
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
      .then(response => {
        console.log(response);
        this.props.dispatch({
          type: "LOGIN",
          data: {
            email: response.data.data.email,
            token: response.data.data.auth_token,
            user_id: response.data.data.user_id
          }
        });
        this.setState({
          email: "",
          password: ""
        });

        this.props.router.push("posts");
      })
      .catch(error => {
        console.dir(error);
        this.setState({
          error: "Coś poszło nie tak"
        });
      });

    // this.props.dispatch({
    // 	type: "LOGIN",
    // 	data: { email: this.state.email, password: this.state.password }
    // });
    // //przejscie do strony posts
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
