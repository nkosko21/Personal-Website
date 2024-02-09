import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'; 
import '@mantine/core/styles.css';
import Home from './main_pages/Home';
import ProfessionalProjects from './main_pages/ProffessionalProjects';
import Videography from './main_pages/Videography';
import Photography from './main_pages/Photography';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/professional" element={<ProfessionalProjects/>}/>
        <Route path="/videography" element={<Videography/>}/>
        <Route path="/photography" element={<Photography/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
