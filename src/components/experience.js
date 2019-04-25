import React, { Component } from "react";
import jobs from "./jobs.json";

class Experience extends Component {
	componentDidMount() {
		this.props.changeSquare(false);
	}
	componentWillUnmount() {
		this.props.changeSquare(true);
	}
	render() {
		return (
			<div className="corner-full-container">
				<div className="experience-container">
					<h1>Experience</h1>
					{jobs.map((job, index) => {
						return (
							<div key={index}>
								<h3>{job.Title}</h3>
								<h4>{job.Company}</h4>
								{job.Responsibilities.map((responsibility, index) => {
									return <li key={index}>{responsibility}</li>;
								})}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Experience;
