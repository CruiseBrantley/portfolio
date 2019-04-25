import React, { Component } from "react";

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
					<h1>About Cruise</h1>

					<p>
						Full Stack Web Developer who is passionate about new technologies
						and the user experience. Background of ten years in customer service
						and experience breaking down technical issues into understandable
						language. Enjoys feedback and endeavors to improve. Has the passion
						required to keep current with developments and ready to acquire new
						skills.
					</p>
					<button
						onClick={() =>
							(window.location.href =
								"https://drive.google.com/uc?export=download&id=1XXBy4Uu-oqYq1j6NxCvutcy3R0sKUlBy")
						}
					>
						Resume
					</button>
				</div>
			</div>
		);
	}
}
export default Bio;
