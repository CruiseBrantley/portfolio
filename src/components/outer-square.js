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
					onClick={() => this.mouseClickCorner(1)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 1 ? (
						<CornerFull subject="Bio" />
					) : (
						<Corner subject="Bio" />
					)}
				</div>
				<div
					className={this.evalClass(2)}
					onMouseEnter={() => this.mouseEnterCorner(2)}
					onClick={() => this.mouseClickCorner(2)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 2 ? (
						<CornerFull subject="Projects" />
					) : (
						<Corner subject="Projects" />
					)}
				</div>
				<div
					className={this.evalClass(3)}
					onMouseEnter={() => this.mouseEnterCorner(3)}
					onClick={() => this.mouseClickCorner(3)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 3 ? (
						<CornerFull subject="Experience" linked={true} />
					) : (
						<Corner subject="Experience" />
					)}
				</div>
				<div
					className={this.evalClass(4)}
					onMouseEnter={() => this.mouseEnterCorner(4)}
					onClick={() => this.mouseClickCorner(4)}
					onMouseLeave={this.mouseLeaveCorner}
				>
					{this.state.selected === 4 ? (
						<CornerFull subject="Education" />
					) : (
						<Corner subject="Education" />
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
		this.setState({ grow: 0, selected: 0, timeout: true });
		setTimeout(() => this.setState({ timeout: false }), 250);
	};
	mouseEnterCorner = num => {
		if (this.state.timeout) return;
		if (this.state.grow !== num) this.setState({ grow: num });
	};
	mouseLeaveCorner = () => {
		if (this.state.grow === 0) this.setState({ grow: 0 });
	};
	mouseClickCorner = num => {
		if (this.state.selected === num) {
			this.deselect();
			return;
		}
		this.setState({ selected: num, timeout: true });
	};
}

export default OuterSquare;
