import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { persistor } from 'redux/store.store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store.store';
import ModalProvider from 'components/ModalProvider/ModalProvider';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import AppThemeProvider from 'components/AppThemeProvider/AppThemeProvider';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/counter-app">
        <AppThemeProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </AppThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
