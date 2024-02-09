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
      <ProjectCategory name="Logiciel">
        <Thumbnail
          link="https://www.linkedin.com/in/bertrand-watelet/"
          image="mediane.png"
          title="Développeur C++"
          description="Développeur logiciel consultant pour VIAVI Solutions et Keranova (2017-2020)"
          keywords="C/C++, Linux"
        />
        <Thumbnail
          link="https://www.linkedin.com/in/bertrand-watelet/"
          image="keranova.png"
          title="Développeur C++"
          description="Développeur logiciel chez Keranova (2020-2022)"
          keywords="C++, Linux, RTOS"
        />
        <Thumbnail
          link="https://bwtlt.github.io/wakavanture_thegame/"
          image="wakavanture.jpg"
          title="Wakavanture - The game"
          description="Un vertical scroller en pixel art où vous conduisez notre van."
          keywords="Godot"
        />
        <Thumbnail
          link="https://github.com/bwtlt/photomaton"
          title="Pi-Photomaton"
          image="photomaton.svg"
          description="Une cabine photographique à la maison."
          keywords="Raspberry Pi, C++, Qt"
        />
      </ProjectCategory>
      <ProjectCategory name="Web">
        <Thumbnail
          link="https://github.com/bwtlt/birth-list"
          image="birthlist.png"
          title="Liste de naissance"
          description="Une liste de naissance pour notre fille née en Décembre 2022."
          keywords="React, Firebase"
        />
        <Thumbnail
          link="https://dogparkmap.bwatelet.fr/"
          image="dogparkmap.png"
          title="Dog Park Map"
          description="Une carte collaborative de lieux où promener votre chien."
          keywords="React, MongoDB"
        />
        <Thumbnail
          link="https://github.com/bwtlt/dromkit"
          title="DROMKIT"
          image="dromkit.svg"
          description="Une boîte à ryhthme dans votre navigateur."
          keywords="React"
        />
        <Thumbnail
          link="https://github.com/bwtlt/bwatelet-website"
          image="favicon.svg"
          title="bwatelet.fr"
          description="Mon site personnel."
          keywords="React, Bootstrap"
        />
      </ProjectCategory>
      <ProjectCategory name="Musique">
        <Thumbnail
          link="https://www.poto-feu-events.com/dromabear"
          image="dromabear.jpeg"
          title="Dromabear"
          description="Projet solo, production et performances live depuis 2019."
        />
        <Thumbnail
          link="https://www.facebook.com/Nursesrockmusic"
          title="Nurses"
          image="nurses.jpg"
          description="Guitare, boîtes à rythme et synthétiseurs de 2015 à 2020."
        />
      </ProjectCategory>
    </div>
  );
};

export default Projects;
