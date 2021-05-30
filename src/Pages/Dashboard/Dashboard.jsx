import React, { useState } from 'react';
import useStyles from './Dashboard.styles';
import Projects from '../../Dashboard/Projects/Projects';
import AddSkills from '../../Dashboard/AddSkills/AddSkills';
import MessagesCollection from '../../Dashboard/MessageCollection/MessagesCollection';

import { Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Dashboard = () => {
  const classes = useStyles();
  const [active, setActive] = useState('home');
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Paper className={classes.sidebar_container}>
          <List>
            <ListItem button onClick={() => setActive('home')}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => setActive('projects')}>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button onClick={() => setActive('skills')}>
              <ListItemText primary="Skills" />
            </ListItem>
            <ListItem button onClick={() => setActive('messages')}>
              <ListItemText primary="Messages" />
            </ListItem>
          </List>
        </Paper>
      </div>
      <div className={classes.content}>
        <Paper className={classes.content_container}>
          {active === 'home' && null}
          {active === 'projects' && <Projects />}
          {active === 'skills' && <AddSkills />}
          {active === 'messages' && <MessagesCollection />}
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
