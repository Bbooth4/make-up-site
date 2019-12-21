import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export const Bar = styled(AppBar)`
  width: 100%;
  text-align: center !important;
  font-family: garamond !important;
  font-size: ${({ theme }) => theme.sizing.large} !important;
  color: ${({ theme }) => theme.color.primary.darkest} !important;
  background: ${({ theme }) => theme.color.primary.lightest} !important;
`;

export const Heading = styled(Typography)`
  font-family: garamond !important;
  font-size: ${({ theme }) => theme.sizing.large} !important;
  color: ${({ theme }) => theme.color.secondary.darkest} !important;
`;
