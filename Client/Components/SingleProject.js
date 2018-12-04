import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component
 */

const SingleProject = ({ project }) => {
  const { title, description, deployedLink, githubLink } = project;
  return (
    <div className="projectSection">
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
        <img />
      </div>
      <div className="flex-row">
        <div className="projectLink">
          <Link to={githubLink}>Github</Link>
        </div>
        {deployedLink.length ? (
          <div className="projectLink">
            <Link to={deployedLink}>Deployed Site</Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SingleProject;
