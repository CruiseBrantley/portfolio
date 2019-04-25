import React, { Component } from "react";
import "./App.css";
import OuterSquare from "./components/outer-square";
import { Route } from "react-router-dom";

class App extends Component {
	state = {
		square: true
	};

	render() {
		return (
			<div className="center-outer-div">
				<div className={this.evalHeight()}>
					<Route
						exact
						path="/"
						render={() => <OuterSquare changeSquare={this.changeSquare} />}
					/>
					<Route
						path="/bio"
						render={() => (
							<OuterSquare selected={1} changeSquare={this.changeSquare} />
						)}
					/>
					<Route
						path="/projects"
						render={() => (
							<OuterSquare selected={2} changeSquare={this.changeSquare} />
						)}
					/>
					<Route
						path="/experience"
						render={() => (
							<OuterSquare selected={3} changeSquare={this.changeSquare} />
						)}
					/>
					<Route
						path="/education"
						render={() => (
							<OuterSquare selected={4} changeSquare={this.changeSquare} />
						)}
					/>
				</div>
			</div>
		);
	}

	evalHeight = () => {
		if (this.state.square) return "App";
		else return "App corner-selected";
	};

	changeSquare = square => {
		this.setState({ square: square });
	};
}

export default App;
