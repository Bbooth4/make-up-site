import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Link,
  Drawer,
  Toolbar,
  ListItem,
  Typography,
  CssBaseline,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Bar, List } from './styles';

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
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}));

const urls = {
  Home: '/',
  Quotes: '/',
  Brands: '/',
  'Photo Library': '/',
  'Purchase Makeup': '/',
  'Contact Me': 'contact',
};

export const Sidebar = ({ children }) => {
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
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper, background: classes }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Home', 'Quotes', 'Brands', 'Photo Library', 'Contact Me', 'Purchase Makeup'].map((text, i) => (
            <Link key={i} href={urls[text]}>
              <ListItem button key={text}>
                <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
