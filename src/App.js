import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from './pages/homepage';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Education from './pages/education';
import Resume from './pages/resume';
import Navbar from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <br></br>
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
        <Route path="*">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;


