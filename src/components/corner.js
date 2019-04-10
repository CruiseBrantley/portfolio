import React, { Component } from "react";

class Corner extends Component {
	render() {
		return (
			<div className="subject-div">
				<h1>{this.props.subject}</h1>
			</div>
		);
	}
}

export default Corner;
