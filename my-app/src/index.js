import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>  
    {/* strict mode on mtlb hm "y=3" nhi likh skte "let y=3 likhna prega" */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  // above sentence means jahan id root hai wahan app component ko daal do, mtlb app.js mai jo likha hoga wo "npm start" krne pr hmari react app dikhayegi
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
