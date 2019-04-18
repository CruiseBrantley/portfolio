import React, { Component } from "react";
import jobs from "./jobs.json";

class Experience extends Component {
	render() {
		return (
			<div className="corner-full-container">
				<div className="experience-container">
					<h1>Experience</h1>
					{jobs.map(job => {
						return (
							<div>
								<h3>{job.Title}</h3>
								<h4>{job.Company}</h4>
								{job.Responsibilities.map(responsibility => {
									return <li>{responsibility}</li>;
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
