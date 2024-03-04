import React from 'react';
import {
  HashRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Home from './components/Home';
import Projects from './components/Projects';

const App = function () {
  return (
    <HashRouter>
      <div className="cover-container d-flex w-100 h-100 mx-auto flex-column text-center">
        <header className="mb-3">
          <img className="logo" alt="logo" src="favicon.svg" />
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <NavLink to="/" className="nav-link">
              Accueil
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Projets
            </NavLink>
            <a href="https://bwatelet.fr/blog" className="nav-link">Blog</a>
          </nav>
        </header>

        <main className="px-3 mb-auto mt-auto">
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </main>
        <footer className="footer">
          <a
            aria-label="Github page"
            href="https://github.com/bwtlt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            aria-label="LinkedIn profile"
            href="https://www.linkedin.com/in/bertrand-watelet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
          </a>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
