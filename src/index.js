import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from './theme';
import Routes from './routes';
import './index.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));