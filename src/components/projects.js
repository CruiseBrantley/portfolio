import React, { Component } from "react";

class Projects extends Component {
	render() {
		return (
			<div className="corner-full-container">
				<div className="projects-container">
					<h1>Projects</h1>
					<h3>RezRight</h3>
					<a href="https://rezright.app/">RezRight.app</a>
					<br />
					<span>
						A web app that makes the process of creating a resume as easy as
						possible. <br />
						RezRight was built using React for the front-end and Express.js with
						MongoDB for the back-end server and database.
					</span>
					<li>Developed on a team of four and deployed within 4 weeks.</li>
					<li>
						Individually contributed React structure, data structure storage
						development, front-end data flow.
					</li>
					<h3>Cloud Chart</h3>
					<a href="https://cloud-chart-java.firebaseapp.com/">
						cloud-chart-java.firebaseapp.com
					</a>
					<br />
					<span>
						Cloud Chart is a spreadsheet-database hybrid, Spreadsheets are saved
						to a SQL database with cross referenced fields. <br />
						Cloud Chart was built using React for the front-end, Java with
						Spring Boot for the back-end and MySQL for the database.
					</span>
					<li>Developed on a team of 3 and deployed within 1 week. </li>
					<li>
						Individually contributed React structure, front-end data flow and
						configured client RESTful endpoints.
					</li>
					<h3>WoW Bindings</h3>
					<a href="https://wow-bindings.firebaseapp.com/">
						wow-bindings.firebaseapp.com
					</a>
					<br />
					<span>
						A web app that allows you to test your World of Warcraft keybindings
						and trains your muscle memory for quick reactions.
					</span>
					<li>
						Built as a solo personal project using React for the front-end and
						draws from Google Sheets for the database used along with local
						storage.
					</li>
				</div>
			</div>
		);
	}
}
export default Projects;
