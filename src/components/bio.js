import React, { Component } from "react";
import Contact from "./contactMe";
import information from "./information";

class Bio extends Component {
	componentDidMount() {
		this.props.changeSquare(false);
	}
	componentWillUnmount() {
		this.props.changeSquare(true);
	}
	render() {
		return (
			<div className="corner-full-container">
				<div className="bio-container">
					<h1>{`About ${information.Name}`}</h1>
					<p>{information.Bio}</p>
				</div>
				<h3>Skills:</h3>
				<div className="skills-container">
					<div className="skills-div">
						{information.Skills.map((skill, index) => {
							return index % 3 === 0 ? (
								<ul key={index}>{`- ${skill}`}</ul>
							) : null;
						})}
					</div>
					<div className="skills-div">
						{information.Skills.map((skill, index) => {
							return index % 3 === 1 ? (
								<ul key={index}>{`- ${skill}`}</ul>
							) : null;
						})}
					</div>
					<div className="skills-div">
						{information.Skills.map((skill, index) => {
							return index % 3 === 2 ? (
								<ul key={index}>{`- ${skill}`}</ul>
							) : null;
						})}
					</div>
				</div>
				<button onClick={() => (window.location.href = information.Resume)}>
					Resume
				</button>
				<Contact />
			</div>
		);
	}
}
export default Bio;
