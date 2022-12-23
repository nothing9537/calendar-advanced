import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainProvider from './components/MainProvider';
import './styles/App.sass'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MainProvider>
    <App />
  </MainProvider>
);