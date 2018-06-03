import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import repos from './utils/repos';
import text from './utils/aboutText';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter
    basename={process.env.PUBLIC_URL}
  >
    <App
      repos={Object.values(repos)}
      text={text}
    />
  </BrowserRouter>,
  document.getElementById('root')
);

// registerServiceWorker();
