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
      lightest: '#fff',
      light: '#fff',
      normal: '#fff',
      dark: '#fff',
      darkest: '#fff'
    },
    secondary: {
      lightest: '#fff',
      light: '#fff',
      normal: '#fff',
      dark: '#fff',
      darkest: '#000'
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
    width: 100%;
    height: 100%;
    line-height: 1.5;
    font-size: ${theme.sizing.medium};
    font-family: ${theme.font.primary};
    color: ${theme.color.secondary.darkest};
  }
`;

export default theme;
export { GlobalStyle };
