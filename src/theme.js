import { createGlobalStyle } from 'styled-components';

const theme = {
  sizing: {
    xxxsmall: '0.25rem',
    xxsmall: '0.5rem',
    xsmall: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2.25rem',
    xxlarge: '3rem'
  },
  font: {
    primary: 'Roboto, sans-serif'
  },
  color: {
    primary: {
      lightest: '#f26be9',
      light: '#de10d0',
      normal: '#c418b9',
      dark: '#8f1487',
      darkest: '#5c0856'
    },
    secondary: {
      lightest: '#81eb8e',
      light: '#3bd14d',
      normal: '#50c878',
      dark: '#1a9128',
      darkest: '#064f0f'
    },

  }
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    color: #000;
    width: 100%;
    height: 100%;
    line-height: 1.5;
    font-size: ${theme.sizing.medium};
    font-family: ${theme.font.primary};
  }
`;

export default theme;
export { GlobalStyle };
