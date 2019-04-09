import React, { Component } from "react";
import "./App.css";
import Corner from "./components/corner";

class App extends Component {
	state = {
		grow: 0,
		selected: 0,
		timeout: false
	};
	render() {
		return (
			<div className="App">
				<div
					className={this.evalClass(1)}
					onMouseEnter={() => this.mouseEnterCorner(1)}
					onMouseDown={() => this.mouseClickCorner(1)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 1 ? (
						<Corner
							subject="Bio"
							deselect={this.deselect}
							selected={this.state.selected === 1}
						/>
					) : null}
				</div>
				<div
					className={this.evalClass(2)}
					onMouseEnter={() => this.mouseEnterCorner(2)}
					onMouseDown={() => this.mouseClickCorner(2)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 2 ? (
						<Corner
							subject="Projects"
							deselect={this.deselect}
							selected={this.state.selected === 2}
						/>
					) : null}
				</div>
				<div
					className={this.evalClass(3)}
					onMouseEnter={() => this.mouseEnterCorner(3)}
					onMouseDown={() => this.mouseClickCorner(3)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 3 ? (
						<Corner
							subject="Experience"
							deselect={this.deselect}
							selected={this.state.selected === 3}
						/>
					) : null}
				</div>
				<div
					className={this.evalClass(4)}
					onMouseEnter={() => this.mouseEnterCorner(4)}
					onMouseDown={() => this.mouseClickCorner(4)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 4 ? (
						<Corner
							subject="Education"
							deselect={this.deselect}
							selected={this.state.selected === 4}
						/>
					) : null}
				</div>
			</div>
		);
	}

	evalClass = num => {
		if (this.state.selected === num) return `corner${num} selected`;
		if (this.state.grow === num) return `corner${num} grow`;
		return `corner${num} shrink`;
	};
	deselect = e => {
		e.stopPropagation();
		e.preventDefault();
		this.setState({ grow: 0, selected: 0, timeout: true });
		setTimeout(() => this.setState({ timeout: false }), 250);
	};
	mouseEnterCorner = num => {
		if (this.state.timeout) return;
		this.setState({ grow: num });
	};
	mouseLeaveCorner = () => {
		this.setState({ grow: 0 });
	};
	mouseClickCorner = num => {
		if (this.state.selected === num) return;
		this.setState({ selected: num, timeout: true });
		setTimeout(() => this.setState({ timeout: false }), 500);
	};
}

export default App;
