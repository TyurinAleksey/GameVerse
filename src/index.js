import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from '@hooks/ScrollToTop';
import App from './App';
import "@styles/style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop/>
    <App />
  </BrowserRouter>,
);