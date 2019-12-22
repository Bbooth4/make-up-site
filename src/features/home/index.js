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
import { compose } from 'ramda';

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

export const Home = ({ photos, photoLoad }) => {
  const classes = useStyles();
  const change = useMediaQuery('(min-width: 1500px)');
  useEffect(() => photoLoad(), [photoLoad]);
  return (
    <Body className={classes.root}>
      <Grid container spacing={3}>
        <ImageGrid item xs={12}>
          <Image key='1' src='background.jpg' alt='make-up' />
          <LargeImageText>Text</LargeImageText>
        </ImageGrid>
        <PhotoTitle item xs={12}>
          <Typography variant="h3" noWrap>
            Photos
          </Typography>
        </PhotoTitle>
        <PhotoList item xs={12}>
          { photos.map((tile, i) => (
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
  photos: photos.photos,
  error: errors.photoError
});

const mapDispatchToProps = dispatch => ({
  photoLoad: () => dispatch(getPhotos())
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
