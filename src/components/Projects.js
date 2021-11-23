import React from 'react';
import Thumbnail from './Thumbnail';

const Projects = function () {
  return (
    <div>
      <h1 className="mb-3">Projects</h1>
      <Thumbnail
        link="/dev"
        image=""
        name="Software Developer"
        title="VIAVI Solutions, Keranova"
        category="Work"
      />
      <Thumbnail
        link="/dromabear"
        image=""
        name="Dromabear"
        title="Music Producer"
        category="Music"
      />
    </div>
  );
};

export default Projects;
