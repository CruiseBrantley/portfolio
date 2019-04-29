import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
	render() {
		return (
			<div className="Contact-container">
				<h3>Contact Me:</h3>
				<span>
					<FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn:{" "}
					<a href="https://www.linkedin.com/in/cruisebrantley/">
						https://www.linkedin.com/in/cruisebrantley/
					</a>
				</span>
				<br />
				<span>
					<FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
					<a href="mailto:cruise.brantley@gmail.com">
						cruise.brantley@gmail.com
					</a>
				</span>
				<br />
				<span>
					<FontAwesomeIcon icon={faMobileAlt} /> Phone: (501) 502-4767
				</span>
			</div>
		);
	}
}
export default Contact;
