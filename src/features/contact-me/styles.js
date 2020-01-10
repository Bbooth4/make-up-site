import styled from 'styled-components';
import { Grid, Input, Select, Button as UnstyledButton } from '@material-ui/core';

export const Body = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled(Grid)`
  text-align: center;
  color: ${({ theme }) => theme.color.secondary.lightest};
  margin: ${({ theme }) => theme.sizing.xlarge} 0 !important;
`;

export const FormWrapper = styled(Grid).attrs({
  container: true
})`
  height: 40vw;
  padding: 1rem;
  object-fit: fill;
`;

export const InputField = styled(Input)`
  width: 100% !important;
`;

export const SelectField = styled(Select)`
  width: 100% !important;
`;

export const Button = styled(UnstyledButton)`
  padding: ${({ theme }) => theme.sizing.medium} !important;
  color: ${({ theme }) => theme.color.secondary.normal} !important;
  border: 1px solid ${({ theme }) => theme.color.primary.normal} !important;
  span {
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizing.medium} !important;
  }
  &:hover {
    background: ${({ theme }) => theme.color.primary.lightest} !important;
  }
`;
