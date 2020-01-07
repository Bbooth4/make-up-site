import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Link,
  Toolbar,
  ListItem,
  Typography,
  CssBaseline
} from '@material-ui/core';
import { Bar, List, Content, ListText } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  bar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    background: '#643173'
  },
  listItem: {
    padding: '0 24px'
  }
}));

const urls = {
  Home: '/',
  Quotes: '/',
  Brands: '/',  
  'Photo Library': '/',
  'Buy Makeup': '/',
  'Contact Me': 'contact',
};

export const Nav = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Bar position="fixed" className={classes.bar}>
        <Toolbar className={classes.bar}>
          <Typography variant="h4" noWrap>
            Garden Party Makeup
          </Typography>
        </Toolbar>
      </Bar>
      <List>
        {['Home', 'Quotes', 'Brands', 'Photo Library', 'Contact Me', 'Buy Makeup'].map((text, i) => (
          <Link key={i} href={urls[text]}>
            <ListItem button key={text} className={classes.listItem}>
              <ListText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Content>
        {children}
      </Content>
    </div>
  );
}

export default Nav;
