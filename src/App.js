import React from 'react';
import {
  HashRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Articles from './components/Articles';
import About from './components/About';
import './App.css';

const App = function () {
  return (
    <HashRouter>
      <body className="d-flex h-100 text-center text-white bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-3">
            <h3 className="float-md-start mb-0">Bertrand Watelet</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
              <NavLink to="/articles" className="nav-link">
                Articles
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </nav>
          </header>

          <main className="px-3 mb-auto mt-auto">
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>
        </div>
      </body>
    </HashRouter>
  );
};

export default App;
