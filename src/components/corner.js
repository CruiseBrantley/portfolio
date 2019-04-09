import React, { Component } from "react";

class Corner extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.subject}</h1>
				<div>
					{this.props.selected ? (
						<button onClick={this.props.deselect}>Shrink</button>
					) : (
						<span />
					)}
				</div>
			</div>
		);
	}
}

export default Corner;
