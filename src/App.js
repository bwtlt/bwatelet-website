import React from 'react';
import {
  HashRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';

const App = function () {
  return (
    <HashRouter>
      <div className="d-flex h-100 text-center">
        <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
          <header className="mb-3">
            <img className="logo" alt="logo" src="favicon.svg" />
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <div className="burger">☰</div>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
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
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
