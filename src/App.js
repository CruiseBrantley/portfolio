import React, { Component } from "react";
import "./App.css";
import OuterSquare from "./components/outer-square";
import { Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="center-outer-div">
				<div className="App">
					<Route exact path="/" render={() => <OuterSquare />} />
					<Route path="/bio" render={() => <OuterSquare selected={1} />} />
					<Route path="/projects" render={() => <OuterSquare selected={2} />} />
					<Route
						path="/experience"
						render={() => <OuterSquare selected={3} />}
					/>
					<Route
						path="/education"
						render={() => <OuterSquare selected={4} />}
					/>
				</div>
			</div>
		);
	}
}

export default App;
