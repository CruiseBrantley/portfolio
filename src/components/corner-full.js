import React, { Component } from "react";

class Corner extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.subject}</h1>
				<span>This is where the subject information would continue.</span>
			</div>
		);
	}
}
export default Corner;
