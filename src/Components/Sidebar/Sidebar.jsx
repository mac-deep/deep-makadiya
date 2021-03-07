import React from "react";
import { withRouter, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Avatar } from "@material-ui/core";
import makeStyles from "./Sidebar.styles.jsx";
import WebIcon from "@material-ui/icons/Web";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import BuildIcon from "@material-ui/icons/Build";

const Sidebar = (props) => {
  const { history } = props;
  console.log(history);
  const classes = makeStyles();
  return (
    <div>
      <div className={classes.profile}>
        <Avatar className={classes.avatar} />
      </div>
      <List component="nav">
        {/* <Link to="/dashboard/projects"> */}
        <ListItem button onClick={() => history.push("/projects")}>
          <ListItemIcon>
            <WebIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        {/* </Link> */}
        <ListItem button onClick={() => history.push("/experience")}>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Education" />
        </ListItem>
        <Link to="/dashboard/skills">
          <ListItem button>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default withRouter(Sidebar);
