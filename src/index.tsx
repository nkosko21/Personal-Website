import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import ProfessionalProjects from './pages/ProffessionalProjects';
import Videography from './pages/Videography';
import Photography from './pages/Photography';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  // <React.StrictMode>
    // <MantineProvider defaultColorScheme="dark">
    <MantineProvider>
      <App/>
    </MantineProvider>
  // </React.StrictMode>
);

