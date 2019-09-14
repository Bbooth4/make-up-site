import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from './theme';
import Routes from './routes';

const App = () => (
  <AppContainer>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </AppContainer>
);

render(<App />, document.getElementById('root'));