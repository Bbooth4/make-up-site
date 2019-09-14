import styled from 'styled-components';

export const Bar = styled.div`
  width: 100%;
  color: #fff;
  margin: auto;
  font-weight: 700;
  text-align: center;
  font-family: garamond;
  padding: ${({ theme }) => theme.sizing.medium};
  font-size: ${({ theme }) => theme.sizing.large};
  background: ${({ theme }) => theme.color.secondary.normal};
`;
  