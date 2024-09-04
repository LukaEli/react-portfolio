import React, { Component } from "react";
import classNames from "classnames";
import projects from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title}></img>
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="btn">
              <svg
                width="40"
                height="40"
                fill="#0092E4"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="github"
              >
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
              </svg>
              <p className="playwrite-cu-LinkFont">Github</p>
            </button>
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <button className="btn">
              <svg
                width="40"
                height="40"
                fill="#0092E4"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="github"
              >
                <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
              </svg>
              <p className="playwrite-cu-LinkFont">Demo</p>
            </button>
          </a>
        </div>
      </div>
    ));
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = ["Youtube Clone", "News API", "NC NEWS", "Limoney"];

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
