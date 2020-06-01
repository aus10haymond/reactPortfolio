import React, { Component } from "react";
import { Card, CardList } from "../projectcards";
import projects from "../../projects.json";
import "../../styles/home.css";

class Projects extends Component {
    state = {
        projects
    };

    render() {
        return (
            <div>
                <div className="pad" />
                <CardList>
                    {this.state.projects.map(project => (
                        <Card
                            site={project.site}
                            url={project.url}
                            target={project.target}
                            description={project.description}
                            key={project.id}
                        />
                    ))}
                </CardList>
            </div>
        );
    }
}

export default Projects;