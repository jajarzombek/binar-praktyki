import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import logo from "./img/logo.png";
import styled from "styled-components";
import { connect } from "react-redux";
/**
 * ComponentName
 */
export class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
		//this.logDate = this.logDate.bind(this);
	}

	updateCounter = val => {
		this.setState({
			counter: val
		});
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
					</ul>
				</div>
				<div className="container-fluid">
					<div className="row">
						{/* {this.props.children} */}
						{/* {React.Children.map(this.props.children, c =>
							React.cloneElement(c, { injectedProp: "props from layout" })
						)} */}
						{React.Children.map(this.props.children, c =>
							React.cloneElement(c, { counter: this.updateCounter })
						)}
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
		postCounter: state.posts.length
	};
};
export default connect(mapStateToProps)(Layout);
