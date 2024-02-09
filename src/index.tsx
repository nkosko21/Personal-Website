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
import Home from './main_pages/Home';
import ProfessionalProjects from './main_pages/ProffessionalProjects';
import Videography from './main_pages/Videography';
import Photography from './main_pages/Photography';

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

