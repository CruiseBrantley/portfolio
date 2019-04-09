import React, { Component } from "react";
import Corner from "./corner";
import CornerFull from "./corner-full";

class OuterSquare extends Component {
	state = {
		grow: 0,
		selected: this.props.selected || 0,
		timeout: false
	};
	render() {
		return (
			<div>
				<div
					className={this.evalClass(1)}
					onMouseEnter={() => this.mouseEnterCorner(1)}
					onMouseDown={() => this.mouseClickCorner(1)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 1 ? (
						<CornerFull subject="Bio" deselect={this.deselect} />
					) : (
						<Corner subject="Bio" deselect={this.deselect} />
					)}
				</div>
				<div
					className={this.evalClass(2)}
					onMouseEnter={() => this.mouseEnterCorner(2)}
					onMouseDown={() => this.mouseClickCorner(2)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 2 ? (
						<CornerFull subject="Projects" deselect={this.deselect} />
					) : (
						<Corner subject="Projects" deselect={this.deselect} />
					)}
				</div>
				<div
					className={this.evalClass(3)}
					onMouseEnter={() => this.mouseEnterCorner(3)}
					onMouseDown={() => this.mouseClickCorner(3)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 3 ? (
						<CornerFull subject="Experience" deselect={this.deselect} />
					) : (
						<Corner subject="Experience" deselect={this.deselect} />
					)}
				</div>
				<div
					className={this.evalClass(4)}
					onMouseEnter={() => this.mouseEnterCorner(4)}
					onMouseDown={() => this.mouseClickCorner(4)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 4 ? (
						<CornerFull subject="Education" deselect={this.deselect} />
					) : (
						<Corner subject="Education" deselect={this.deselect} />
					)}
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

export default OuterSquare;
