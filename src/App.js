import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from './pages/homepage';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import UofU from './pages/uofu';
import SLCC from './pages/slcc.jsx';
import Resume from './pages/resume';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Myself from './pages/signatureAssignments/COMM/myselfAsACommunicator';
import Astronomy from './pages/signatureAssignments/PHYS/astronomyConversation';
import Music from './pages/signatureAssignments/MUSIC/musicalCulture';
import LostTreasure from './pages/signatureAssignments/MATH1060/lostTreasure';


function App() {
  return (
    <Router>
      <Navbar />
      <br></br>
      <Switch>
        <Route exact path="/JJ-Portfolio/">
          <Homepage />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/uofu">
          <UofU />
        </Route>
        <Route path="/slcc">
          <SLCC />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/myselfAsACommunicator">
          <Myself />
        </Route>
        <Route path="/astronomy">
          <Astronomy />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/lostTreasure">
          <LostTreasure />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;


