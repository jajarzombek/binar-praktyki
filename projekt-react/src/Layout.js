import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import logo from "./img/logo.png";
import styled from "styled-components";
import { connect } from "react-redux";
/**
 * ComponentName
 */
export class Layout extends React.Component {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 		counter: 0
  // 	};
  // 	//this.logDate = this.logDate.bind(this);
  // }

  // updateCounter = val => {
  // 	this.setState({
  // 		counter: val
  // 	});
  // };
  // function UserGreeting(name) {
  //   return <h1>Welcome back, {name} !</h1>;
  // }
  //
  // function GuestGreeting(props) {
  //   return <h1>Please sign up.</h1>;
  // }

  logout = () => {
    this.props.dispatch({
      type: "LOGOUT",
      data: {}
    });
    //przejscie do strony posts
    this.props.router.push("posts");
  };
  isLogged = () => {
    if (this.props.email !== "") {
      return (
        <Link style={{ color: "#c94c4c" }} onClick={this.logout}>
          Logout
        </Link>
      );
    } else {
      return (
        <Link to="/post-login" style={{ color: "#c94c4c" }}>
          Login
        </Link>
      );
    }
  };
  render() {
    return (
      <StyledComponent className="container-fluid">
        <div
          className="row"
          style={{
            borderBottom: "solid",
            borderBottomColor: "#c94c4c",
            color: "#eee"
          }}
        >
          <ul className="nav navbar-nav">
            <li>
              <a className="navbar-left" href="#">
                <i
                  className="fa fa-paw "
                  style={{ color: "#c94c4c" }}
                  fontaria-hidden="true"
                />
              </a>
            </li>
            <li className="active">
              <Link to="/" style={{ color: "#c94c4c" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts" style={{ color: "#c94c4c" }}>
                Posts
              </Link>
            </li>
            <li>
              <Link to="/posts-details" style={{ color: "#c94c4c" }}>
                Post Details
              </Link>
            </li>
            <li>
              <Link to="/post-form" style={{ color: "#c94c4c" }}>
                Add Post
              </Link>
            </li>

            <li>
              <Link style={{ color: "#c94c4c" }}>
                {" "}Post Counter: {this.props.postCounter}
              </Link>
            </li>
            <li>
              <Link to="/register" style={{ color: "#c94c4c" }}>
                {" "}Register
              </Link>
            </li>
            <li>
              {this.props.email &&
                <Link style={{ color: "#c94c4c" }}>
                  {" "}Hello {this.props.email}
                </Link>}
            </li>
            <li>
              {this.isLogged()}
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          <div className="row">
            {this.props.children}
            {/* {React.Children.map(this.props.children, c =>
							React.cloneElement(c, { injectedProp: "props from layout" })
						)} */}
            {/* {React.Children.map(this.props.children, c =>
							React.cloneElement(c, { counter: this.updateCounter })
						)} */}
          </div>
        </div>
      </StyledComponent>
    );
  }
}

const StyledComponent = styled.div`
  background-color: green,
  font-size: 20px,
  color: #fff
`;
const mapStateToProps = state => {
  return {
    postCounter: state.posts.postsCollection.length,
    email: state.session.email
  };
};
export default connect(mapStateToProps)(Layout);
