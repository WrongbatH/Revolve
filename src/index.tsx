import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Example from './TestPage/Page';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter basename='/'>
    <React.StrictMode>
      <Routes>
        <Route path="*" element={<Example />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
