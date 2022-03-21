import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RowndProvider } from '@rownd/react';

let key = process.env.REACT_APP_ROWND_APP_KEY
// key = 'd7e2c6ec-99aa-4614-ad02-41baaa742fc6'

ReactDOM.render(
  <React.StrictMode>
    <RowndProvider appKey={key} postLoginRedirect="/profile">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RowndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
