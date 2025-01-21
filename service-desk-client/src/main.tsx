import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './assets/style/main.css'

import { Layout } from './layout/layout';
import { CreateApplication } from './pages/CreateApplication/CreateApplication';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<CreateApplication/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
