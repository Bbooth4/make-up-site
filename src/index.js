import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));