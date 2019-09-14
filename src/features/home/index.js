import React from 'react';
import { Body, Image } from './styles';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Body className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Image src='background.jpg' alt='make-up' />
        </Grid>
      </Grid>
    </Body>
  );
}

export default Home;
