import React, { Component } from "react";
import programs from "./programs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Projects extends Component {
	componentDidMount() {
		this.props.changeSquare(false);
	}
	componentWillUnmount() {
		this.props.changeSquare(true);
	}

	importAll(r) {
		let images = {};
		r.keys().forEach((item, index) => {
			images[item.replace("./", "")] = r(item);
		});
		return images;
	}

	render() {
		const images = this.importAll(
			require.context("../images", false, /\.(png|jpe?g|svg)$/)
		);
		return (
			<div className="corner-full-container">
				<div className="projects-container">
					<h1>Projects</h1>
					{programs.map((program, index) => {
						return (
							<div
								className={
									index % 2 === 0 ? "project-div image-left" : "project-div"
								}
								key={index}
							>
								<div className="project-text">
									<h3>
										{program.Title}{" "}
										<a href={program.Github}>
											<FontAwesomeIcon icon={faGithub} />
										</a>
									</h3>
									<a href={program.Link}>{program.LinkText}</a>
									<br />
									{program.DescriptionArr.map((description, index) => {
										return (
											<div key={index}>
												<span key={index}>{description}</span>
												<br />
											</div>
										);
									})}
									<li>{program.Span}</li>
									{program.Contributions ? (
										<li>{program.Contributions}</li>
									) : null}
								</div>
								<img
									alt=""
									className="project-image"
									src={images[program.Image]}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Projects;
