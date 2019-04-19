import React, { Component } from "react";
import schools from "./schools.json";

class Education extends Component {
	render() {
		return (
			<div className="corner-full-container">
				<div className="education-container">
					<h1>Education</h1>
					{schools.map((school, index) => {
						return (
							<div key={index}>
								<h3>{school.School}</h3>
								<h4>{school.Years}</h4>
								<span>{school.Description}</span>
								{school.Bullets.map((bullet, index) => {
									return <li key={index}>{bullet}</li>;
								})}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Education;
