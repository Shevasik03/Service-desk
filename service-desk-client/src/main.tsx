import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './assets/style/main.css'

import { Layout } from './layout/layout';
import { CreateApplication } from './pages/CreateApplication/CreateApplication';
import { UsersInformation } from './pages/UsersInformation/UsersInformation';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<CreateApplication />} />
            <Route path='users' element={<UsersInformation/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
