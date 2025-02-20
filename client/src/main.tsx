import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';
import './assets/style/main.css'

import { Layout } from './layout/layout.tsx';
import { CreateTickets } from './pages/UserTickets/CreateTickets/CreateTickets.tsx';
import { UsersInformation } from './pages/UsersInformation/UsersInformation.tsx';
import { AllTickets } from './pages/UserTickets/AllTickets/AllTickets.tsx';
import { MyWorkTickets } from './pages/UserTickets/MyWorkTickets/MyWorkTickets.tsx';


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <HashRouter >
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<CreateTickets />} />
            <Route path='users' element={<UsersInformation/>} />
            <Route path='allTickets' element={<AllTickets/>} />
            <Route path='myWorkTickets' element={<MyWorkTickets/>} />
          </Route>
        </Routes>
      </HashRouter>
    </StrictMode>
  </Provider>
);
