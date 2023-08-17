import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import MainPage from './main/Page';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter basename='/'>
    <React.StrictMode>
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
