import styled from 'styled-components';
import { AppBar, ListItemText, List as UnstyledList } from '@material-ui/core';

export const Bar = styled(AppBar)`
  width: 100%;
  text-align: center !important;
  font-family: garamond !important;
  font-size: ${({ theme }) => theme.sizing.large} !important;
  color: ${({ theme }) => theme.color.neutral.normal} !important;
  background: ${({ theme }) => theme.color.primary.darkest} !important;
`;

export const List = styled(UnstyledList)`
  z-index: 1000 !important;
  position: fixed !important;
  margin-top: 60px !important;
  span {
    color: ${({ theme }) => theme.color.primary.dark} !important;
  }
`;
  
export const ListText = styled(ListItemText)`
  span {
    font-size: 20px !important;
    font-weight: 700 !important;
  }
`;

export const Content = styled.main`
  flex-grow: 1;
  max-width: 100%;
  margin-top: 64px;
  > div {
    padding: 0 10rem 15rem 10rem;
  }
`;
