import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { RowndProvider } from '@rownd/react';

// let key = process.env.REACT_APP_ROWND_APP_KEY
let key = 'd7e2c6ec-99aa-4614-ad02-41baaa742fc6'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RowndProvider appKey={key} postLoginRedirect="/">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RowndProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
