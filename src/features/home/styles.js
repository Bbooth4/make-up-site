import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Body = styled.div`
  width: 100%;
  display: flex;
`;

export const ImageGrid = styled.div`
  position: relative;
  text-align: center;
`;

export const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  > div {
    width: ${({ width }) => width ? '33%' : '50%'};
  }
`;

export const PhotoTitle = styled(Grid)`
  text-align: center;
  color: ${({ theme }) => theme.color.secondary.light};
`;


export const LargeImage = styled.img`
  height: 40vw;
  object-fit: fill;
  width: calc(100vw - 240px);
`;

export const Image = styled.img`
  height: 40vw;
  object-fit: fill;
  width: calc(100vw - 240px);
`;

export const GridImage = styled.img`
  width: 99%;
  max-height 20rem;
`;

export const LargeImageText = styled.div`
  top: 50%;
  left: 50%;
  color: #fff;
  position: absolute;
  transform: translate(0, -50%);
  font-size: ${({ theme }) => theme.sizing.xxlarge};
`;

export const ImageText = styled.div`
  top: 40%;
  left: 35%;
  color: #fff;
  position: absolute;
  font-size: ${({ theme }) => theme.sizing.xxlarge};
`;

export const GridRoot = styled(Grid)`
  display: flex;
  justify-content: space-around;
`;
