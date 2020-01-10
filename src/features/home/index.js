import React, { useEffect } from 'react';
import {
  Body,
  Image,
  ImageText,
  ImageGrid,
  GridImage,
  PhotoList,
  PhotoTitle,
  ImageGridItem,
  LargeImageText
} from './styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { getPhotos } from './container';
import { prop, head, type, compose } from 'ramda';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  grid: {
    margin: 0
  }
}));

export const Home = ({ banner, photoList, photoLoad }) => {
  const classes = useStyles();
  useEffect(() => {
    photoLoad('banner');
    photoLoad('photo_list');
  }, [photoLoad]);
  return (
    <Body className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        <ImageGrid item xs={12} alt={banner ? 'false' : 'true'}>
          <Image key='1' src={banner} alt='make-up' />
          <LargeImageText>Text</LargeImageText>
        </ImageGrid>
        <PhotoTitle item xs={12}>
          <Typography variant="h3" noWrap>
            Photos
          </Typography>
        </PhotoTitle>
        <PhotoList item xs={12}>
          { photoList.map((tile, i) => (
            <ImageGridItem key={i} item>
              <GridImage src={prop('img', tile)} alt={prop('title', tile)} />
              <ImageText>{prop('title', tile)}</ImageText>
            </ImageGridItem>
          ))}
        </PhotoList>
      </Grid>
    </Body>
  );
}

const mapStateToProps = ({ errors, photos }) => ({
  error: errors.photoError,
  banner: prop('img', head(photos.photos.banner)),
  photoList: type(photos.photos.photo_list) === 'Array' ? photos.photos.photo_list : []
});

const mapDispatchToProps = dispatch => ({
  photoLoad: type => dispatch(getPhotos(type))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
