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
    primary: 'Garamond, sans-serif'
  },
  color: {
    primary: {
      lightest: '#bdbdfc',
      light: '#9a9af5',
      normal: '#6f6fd9',
      dark: '#5757a1',
      darkest: '#3c3c6e'
    },
    secondary: {
      lightest: '#a1ffac',
      light: '#71d17d',
      normal: '#54ab5f',
      dark: '#388041',
      darkest: '#1c4521'
    }
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
    font-family: ${theme.font.primary} !important;
  }
`;

export default theme;
export { GlobalStyle };
