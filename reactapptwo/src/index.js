import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('my-root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.showWidget = function () {
  var head = document.getElementsByTagName('head')[0];
  var style = document.createElement('link');
  style.href = './build/static/css/main.e58d17a8.css';
  style.type = 'text/css';
  style.rel = 'stylesheet';

  head.append(style);

  var scriptOne = document.createElement('script');
  scriptOne.src = './build/static/js/787.fee8238f.chunk.js';
  scriptOne.type = 'text/javascript';
  //scriptOne.async = true;

  var scriptTwo = document.createElement('script');
  scriptTwo.src = './build/static/js/main.fd295648.js';
  scriptTwo.type = 'text/javascript';
  //scriptTwo.async = true;

  head.append(scriptOne);
  head.append(scriptTwo);

  if (!document.getElementById('root')) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};
