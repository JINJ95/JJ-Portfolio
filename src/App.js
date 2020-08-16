import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from './pages/homepage';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Education from './pages/education';
import Resume from './pages/resume';
import Navbar from './components/nav';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


