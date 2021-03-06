import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';

export const Body = styled.div`
  width: 100%;
  display: flex;
`;

export const ImageGrid = styled.div`
  position: relative;
  text-align: center;
  ${({ alt }) => alt === 'true' && css`
    top: 10vw;
    width: 100%;
    height: 20vw;
  `};
`;

export const ImageGridItem = styled(ImageGrid)`
  position: relative;
  text-align: center;
  width: 33%;
  @media (max-width: 1400px) {
    width: 50%;
  }
  img {
    transition: 0.3s;
    padding: ${({ theme }) => theme.sizing.medium};
    &:hover {
      padding: 0;
      transition: 0.3s;
    }
  }
`;

export const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const PhotoTitle = styled(Grid)`
  text-align: center;
  color: ${({ theme }) => theme.color.secondary.light};
  margin: calc(${({ theme }) => theme.sizing.xxlarge} * 3) 0 !important;
`;

export const LargeImage = styled.img`
  width: 100%;
  height: 40vw;
  object-fit: fill;
`;

export const Image = styled.img`
  width: 100%;
  height: 40vw;
  object-fit: fill;
`;

export const GridImage = styled.img`
  width: 100%;
  height: 100%;
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
  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizing.large};
  }
`;
