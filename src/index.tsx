import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MyContextPageProvider } from './context/MyContext';

ReactDOM.render(
  <React.StrictMode>
    <MyContextPageProvider>
      <App />
    </MyContextPageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);