import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { AppContextProvider } from './Context';

const rootElement = document.getElementById('root') as Element;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
