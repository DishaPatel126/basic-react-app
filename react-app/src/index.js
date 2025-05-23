import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myFirstElement = <h1>Hello World from Index.js!</h1>


// root.render(myFirstElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <App />
      {myFirstElement}
    </>
  </React.StrictMode>
);




reportWebVitals();
