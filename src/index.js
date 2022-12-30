import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";

import {ContactsProvider} from './services/ContactsContext';
import { CountriesProvider } from './services/CountriesContext';
import {CitiesProvider} from './services/CitiesContext';
import {LanguagesProvider} from './services/LanguagesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
      <CountriesProvider>
        <CitiesProvider>
          <LanguagesProvider>
            <ContactsProvider>
              <App />
            </ContactsProvider>
          </LanguagesProvider>
        </CitiesProvider>
      </CountriesProvider>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
