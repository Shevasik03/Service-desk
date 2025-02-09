import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './assets/style/main.css'

import { Layout } from './layout/layout';
import { CreateTickets } from './pages/CreateTickets/CreateTickets';
import { UsersInformation } from './pages/UsersInformation/UsersInformation';
import { AllTickets } from './pages/AllTickets/AllTickets';
import { MyWorkTickets } from './pages/MyWorkTickets/MyWorkTickets';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<CreateTickets />} />
            <Route path='users' element={<UsersInformation/>} />
            <Route path='allTickets' element={<AllTickets/>} />
            <Route path='myWorkTickets' element={<MyWorkTickets/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);

//test