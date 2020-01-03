import styled from 'styled-components';
import { AppBar, List as UnstyledList } from '@material-ui/core';

export const Bar = styled(AppBar)`
  width: 100%;
  text-align: center !important;
  font-family: garamond !important;
  font-size: ${({ theme }) => theme.sizing.large} !important;
  color: ${({ theme }) => theme.color.neutral.normal} !important;
  background: ${({ theme }) => theme.color.primary.darkest} !important;
`;

export const List = styled(UnstyledList)`
  svg {
    color: ${({ theme }) => theme.color.neutral.normal} !important;
  }
  span {
    color: ${({ theme }) => theme.color.neutral.normal} !important;
  }
`;
