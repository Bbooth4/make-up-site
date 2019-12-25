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
import {
  Grid,
  Typography,
  makeStyles,
  useMediaQuery
} from '@material-ui/core';
import { getPhotos } from './container';
import { prop, head, compose } from 'ramda';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  paper: {
    textAlign: 'center',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  icon: {
    color: '#fff'
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}));

export const Home = ({ banner, photoList, photoLoad }) => {
  const classes = useStyles();
  const change = useMediaQuery('(min-width: 1500px)');
  useEffect(() => {
    photoLoad('banner');
    photoLoad('photo_list');
  }, [photoLoad]);
  return (
    <Body className={classes.root}>
      <Grid container spacing={3}>
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
            <ImageGridItem key={i} item xs={6} lg={4} width={change.toString()}>
              <GridImage src={tile.img} alt={tile.title} />
              <ImageText>{tile.title}</ImageText>
            </ImageGridItem>
          ))}
        </PhotoList>
      </Grid>
    </Body>
  );
}

const mapStateToProps = ({ errors, photos }) => ({
  error: errors.photoError,
  photoList: photos.photos.photo_list,
  banner: prop('img')(head(photos.photos.banner))
});

const mapDispatchToProps = dispatch => ({
  photoLoad: type => dispatch(getPhotos(type))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
