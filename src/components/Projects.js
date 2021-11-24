import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

const ProjectCategory = function (props) {
  const { children } = props;
  return <div className="project-category">{children}</div>;
};

ProjectCategory.propTypes = {
  children: PropTypes.node.isRequired,
};

const Projects = function () {
  return (
    <div>
      <h1 className="mb-3">Projects</h1>
      <div className="projects">
        <ProjectCategory>
          <Thumbnail
            link="/dev"
            image=""
            title="Software Developer"
            description="VIAVI Solutions, Keranova"
          />
          <Thumbnail
            link="/dromabear"
            image=""
            title="Music Producer"
            description="Dromabear, Nurses"
          />
        </ProjectCategory>
      </div>
    </div>
  );
};

export default Projects;
