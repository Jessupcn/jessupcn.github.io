import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component
 */

const SingleProject = ({ project }) => {
  // Deconstructing props
  const {
    title,
    description,
    deployedLink,
    githubLink,
    borderBottom,
    images
  } = project;

  return (
    <div
      className={
        borderBottom ? 'projectSection borderBottom' : 'projectSection'
      }
    >
      <h3>{title}</h3>
      <div className="flex-row">
        <p className="projDescription">{description}</p>
        <div className="projImgContainer">
          <img src={images.length ? images : null} />
        </div>
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
