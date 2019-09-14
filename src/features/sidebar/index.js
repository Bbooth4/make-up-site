import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  List,
  Drawer,
  Toolbar,
  Divider,
  ListItem,
  Typography,
  CssBaseline,
  ListItemText
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Bar } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  bar: {
    margin: 'auto',
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  },
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}));

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
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Quotes', 'Brands'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Photo Library', 'Contact Info', 'Purchase Makeup'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
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
