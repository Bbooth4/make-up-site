import styled from 'styled-components';

export const Bar = styled.div`
  width: 100%;
  margin: auto;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.color.secondary.normal};
  padding: ${({ theme }) => theme.sizing.medium};
  font-size: ${({ theme }) => theme.sizing.large};
`;
  