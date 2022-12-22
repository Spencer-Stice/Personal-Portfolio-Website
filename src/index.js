import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Navbar from './pages/navbar.js';
import DAV from './pages/dav.js';
import SWARM from './pages/swarm.js';
import Classes from './pages/classes.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './pages/experience.js';
import Contact from './pages/contact.js';
import FIT from './pages/fit.js';
import Mate from './pages/mate.js';
import Ghost from './pages/ghost.js';
import Car from './pages/car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={"/Personal-Portfolio-Website"}>
        <Routes>
            <Route path="/" element={<Home class="main-div"/>}></Route>
            <Route path="/projects" element={<div><Navbar></Navbar><Projects class="main-div"/></div>}></Route>
            <Route path="/classes" element={<div><Navbar></Navbar><Classes class="main-div"/></div>}></Route>
            <Route path="/experience" element={<div><Navbar></Navbar><Experience class="main-div"/></div>}></Route>
            <Route path="/contact" element={<div><Navbar></Navbar><Contact class="main-div"/></div>}></Route>
            <Route path="/dav" element={<div><Navbar></Navbar><DAV class="main-div"/></div>}></Route>
            <Route path="/swarm" element={<div><Navbar></Navbar><SWARM class="main-div"/></div>}></Route>
            <Route path="/fit" element={<div><Navbar></Navbar><FIT class="main-div"/></div>}></Route>
            <Route path="/mate" element={<div><Navbar></Navbar><Mate class="main-div"/></div>}></Route>
            <Route path="/ghost" element={<div><Navbar></Navbar><Ghost class="main-div"/></div>}></Route>
            <Route path="/car" element={<div><Navbar></Navbar><Car class="main-div"/></div>}></Route>
        </Routes>
    </Router>
  </React.StrictMode>
);

