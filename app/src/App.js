import React from 'react'
import { ToastProvider } from 'react-toast-notifications'

import Routes from './routes'

import './global-styles.css'

const App = () => {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
}

export default App;
