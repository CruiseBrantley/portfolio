import React, { Component } from "react";

class Corner extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.subject}</h1>
				<h3>This is where the subject information would continue.</h3>
				<div>
					<button onClick={this.props.deselect}>Shrink</button>
				</div>
			</div>
		);
	}
}

export default Corner;
