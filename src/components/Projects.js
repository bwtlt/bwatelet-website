import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

const ProjectCategory = function (props) {
  const { children, name } = props;
  return (
    <div className="project-category">
      <h2>{name}</h2>
      <div className="projects-grid">{children}</div>
    </div>
  );
};

ProjectCategory.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

const Projects = function () {
  return (
    <div className="projects">
      <ProjectCategory name="Software Development">
        <Thumbnail
          link="https://www.linkedin.com/in/bertrand-watelet/"
          image="mediane.png"
          title="C++ Developer"
          description="Software development consulting for VIAVI Solutions and Keranova (2017-2020)"
          keywords="C/C++, Linux"
        />
        <Thumbnail
          link="https://www.linkedin.com/in/bertrand-watelet/"
          image="keranova.png"
          title="C++ Developer"
          description="Software development at Keranova (2020-2022)"
          keywords="C++, Linux, RTOS"
        />
        <Thumbnail
          link="https://github.com/bwtlt/birth-list"
          image="birthlist.png"
          title="Liste de naissance"
          description="A birth-list for our baby born in Dec. 2022."
          keywords="React, Firebase"
        />
        <Thumbnail
          link="https://bwtlt.github.io/wakavanture_thegame/"
          image="wakavanture.jpg"
          title="Wakavanture - The game"
          description="A pixel art vertical scroller where you get to drive our van."
          keywords="Godot"
        />
        <Thumbnail
          link="https://dogparkmap.bwatelet.fr/"
          image="dogparkmap.png"
          title="Dog Park Map"
          description="A work-in-progress collaborative map of places to walk your dog."
          keywords="React, MongoDB"
        />
        <Thumbnail
          link="https://github.com/bwtlt/dromkit"
          title="DROMKIT"
          description="A work-in-progress online drum machine."
          keywords="React"
        />
        <Thumbnail
          link="https://github.com/bwtlt/photomaton"
          title="Pi-Photomaton"
          description="A Raspberry Pi-powered photobooth."
          keywords="Raspberry Pi, C++, Qt"
        />
      </ProjectCategory>
      <ProjectCategory name="Music">
        <Thumbnail
          link="https://www.poto-feu-events.com/dromabear"
          image="dromabear.png"
          title="Dromabear"
          description="Solo project, production and live performances since 2019."
        />
        <Thumbnail
          link="https://www.facebook.com/Nursesrockmusic"
          title="Nurses"
          description="Guitar, drum machine and synthesizers from 2015 to 2020."
        />
      </ProjectCategory>
    </div>
  );
};

export default Projects;
