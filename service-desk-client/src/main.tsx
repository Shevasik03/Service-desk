import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/style/main.css'

import { Layout } from './layout/layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout/>
  </StrictMode>
);
