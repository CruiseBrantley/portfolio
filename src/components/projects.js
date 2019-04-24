import React, { Component } from "react";
import programs from "./programs.json";

class Projects extends Component {
	render() {
		return (
			<div className="corner-full-container">
				<div className="projects-container">
					<h1>Projects</h1>
					{programs.map((program, index) => {
						return (
							<div key={index}>
								<h3>{program.Title}</h3>
								<br />
								{program.DescriptionArr.map((description, index) => {
									return (
										<>
											<span key={index}>{description}</span>
											<br />
										</>
									);
								})}
								<li>{program.Span}</li>
								{program.Contributions ? (
									<li>{program.Contributions}</li>
								) : null}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Projects;
