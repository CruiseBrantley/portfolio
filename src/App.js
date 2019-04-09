import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		grow: 0,
		selected: 0
	};
	render() {
		return (
			<div className="App">
				<div
					className={this.evalClass(1)}
					onMouseEnter={() => this.mouseEnterCorner(1)}
					onMouseDown={() => this.mouseClickCorner(1)}
					onMouseLeave={this.mouseLeaveCorner}
				/>
				<div
					className={this.evalClass(2)}
					onMouseEnter={() => this.mouseEnterCorner(2)}
					onMouseDown={() => this.mouseClickCorner(2)}
					onMouseLeave={this.mouseLeaveCorner}
				/>
				<div
					className={this.evalClass(3)}
					onMouseEnter={() => this.mouseEnterCorner(3)}
					onMouseDown={() => this.mouseClickCorner(3)}
					onMouseLeave={this.mouseLeaveCorner}
				/>
				<div
					className={this.evalClass(4)}
					onMouseEnter={() => this.mouseEnterCorner(4)}
					onMouseDown={() => this.mouseClickCorner(4)}
					onMouseLeave={this.mouseLeaveCorner}
				/>
			</div>
		);
	}

	evalClass = num => {
		if (this.state.selected === num) return `corner${num} selected`;
		if (this.state.grow === num) return `corner${num} grow`;
		return `corner${num} shrink`;
	};

	mouseEnterCorner = num => {
		this.setState({ grow: num });
	};
	mouseLeaveCorner = () => {
		this.setState({ grow: 0 });
	};
	mouseClickCorner = num => {
		this.setState({ selected: num });
	};
}

export default App;
