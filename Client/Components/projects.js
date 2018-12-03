import React from 'react';
import SingleProject from './SingleProject';

/**
 * Hard-coded project data for easy access
 */
const projects = [
  { title: 'SimpleStocks', description: '', images: [] },
  { title: 'DevBook', description: '', images: [] },
  { title: 'Mr. Mixologist', description: '', images: [] }
];

/**
 * Component
 */

const Projects = () => {
  return (
    <div className="sectionContainer about">
      <div>
        <h1 className="sectionHeader">Projects</h1>
      </div>
      {projects.map(project => {
        return <SingleProject key={project.title} project={project} />;
      })}
    </div>
  );
};

export default Projects;
