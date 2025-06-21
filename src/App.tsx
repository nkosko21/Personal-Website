import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'; 
import '@mantine/core/styles.css';
import Home from './pages/Home Page/Home';
import ProfessionalProjects from './pages/Project Page/Projects';
import Videography from './pages/Videography Page/Videography';
import Photography from './pages/Photography Page/Photography';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact Page/Contact';
import InteractableResume from './pages/Interactable Resume Page/InteractableResume';
import TriaPageHome from './pages/Tria Page/TriaPageHome';
import TurnTracker from './pages/Turn Program Page/turnProgramPage';

function App() {
  return (
  <div style={{ backgroundColor: 'ivory' }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects/*" element={<ProfessionalProjects/>}/>
        <Route path="/videography" element={<Videography/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/photography" element={<Photography/>}/>
        <Route path="/resume" element={<InteractableResume />} /> 
        <Route path="/tria/*" element={<TriaPageHome />} />
        <Route path="/turncounter" element={<TurnTracker />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
