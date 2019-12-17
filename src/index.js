import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import reduxStore from './store/configureStore';
import theme from './theme';
import Root from './root';

const store = reduxStore.configureStore();

const App = () => (
  <AppContainer>
    <ThemeProvider theme={theme}>
      <Root store={store} history={reduxStore.history} />
    </ThemeProvider>
  </AppContainer>
);

render(<App />, document.getElementById('root'));
