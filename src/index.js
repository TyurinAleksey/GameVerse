import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ScrollToTop from '@hooks/ScrollToTop';
import store from '@store/store'
import App from './App';
import "@styles/style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </Provider>
);