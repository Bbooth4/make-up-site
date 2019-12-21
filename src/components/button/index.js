import React from 'react';
import styled from 'styled-components';
import { Button as UnstyledButton } from '@material-ui/core';

export const StyledButton = styled(UnstyledButton)`
  padding: ${({ theme }) => theme.sizing.medium} !important;
  color: ${({ theme }) => theme.color.secondary.normal} !important;
  border: 1px solid ${({ theme }) => theme.color.secondary.normal} !important;
  span {
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizing.medium} !important;
  }
  &:hover {
    background: ${({ theme }) => theme.color.secondary.lightest} !important;
  }
`;

export const Button = ({ onClick, children }) => (
  <Button onChange={onClick}>{children}</Button>
);

export default Button;
