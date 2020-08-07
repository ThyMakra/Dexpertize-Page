import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppRouter from './routes/router';


/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 */
ReactDOM.render(<AppRouter />, document.getElementById('root'));


