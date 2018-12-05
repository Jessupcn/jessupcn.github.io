import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component
 */

const SingleProject = ({ project }) => {
  const { title, description, deployedLink, githubLink } = project;
  return (
    <div
      className={
        project.borderBottom ? 'projectSection borderBottom' : 'projectSection'
      }
    >
      <h3>{title}</h3>
      <div>
        <p className="projDescription">{description}</p>
        <img />
      </div>
      <div className="flex-row projectLinksContainer">
        <div className="projectLink">
          <a href={githubLink}>Github</a>
        </div>
        {deployedLink.length ? (
          <div className="projectLink">
            <a href={deployedLink}>Deployed Site</a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SingleProject;
