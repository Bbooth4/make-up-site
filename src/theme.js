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
      lightest: '#B8A5CE', // purple
      light: '#7D5BA6',
      normal: '#9C7BA5',
      dark: '#80568C',
      darkest: '#643173'
    },
    secondary: {
      lightest: '#697D6D', // green
      light: '#3E5843',
      normal: '#132F18',
      dark: '#0D2111',
      darkest: '#14331A'
    },
    neutral: {
      lightest: '#F2F4F6', // grey
      light: '#E3E7EC',
      normal: '#DDE2E8',
      dark: '#F7EDEC',
      darkest: '#F3E3E2' // tan
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
    overflow-x: hidden;
    font-size: ${theme.sizing.medium};
    font-family: ${theme.font.primary} !important;
  }
`;

export default theme;
export { GlobalStyle };
