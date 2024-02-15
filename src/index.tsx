import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';

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

