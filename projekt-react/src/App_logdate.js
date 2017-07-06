import React, { Component } from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
// import "./App.css";

class ChildComponent extends React.Component {
	render() {
		return (
			<div>
				Child component, {this.props.name}
			</div>
		);
	}
}

ChildComponent.defaultProps = {
	name: "default name"
};

ChildComponent.propTypes = {
	name: PropTypes.string.isRequired
};

class ParentComponent extends React.Component {
	render() {
		return (
			<div>
				Parent component, {this.props.name}
			</div>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dates: []
		};
		this.logDate = this.logDate.bind(this);
	}

	logDate() {
		this.setState({
			dates: [...this.state.dates, new Date().toString()]
		});
	}

	render() {
		return (
			<div className="App">
				<div>Hello from my app</div>
				<button onClick={this.logDate}>log date</button>
				<div>
					{this.state.dates.map(d => <ChildComponent name={d} key={d} />)}
				</div>
			</div>
		);
	}
}

export default App;
