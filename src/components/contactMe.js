import React, { Component } from "react";

class Contact extends Component {
	render() {
		return (
			<div className="Contact-container">
				<h3>Contact Me:</h3>
				<span>
					LinkedIn:{" "}
					<a href="https://www.linkedin.com/in/cruisebrantley/">
						https://www.linkedin.com/in/cruisebrantley/
					</a>
				</span>
				<br />
				<span>
					Email:{" "}
					<a href="mailto:cruise.brantley@gmail.com">
						cruise.brantley@gmail.com
					</a>
				</span>
				<br />
				<span>Phone: (501) 502-4767</span>
			</div>
		);
	}
}
export default Contact;
