import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Projects from "./Projects/Projects";
import { AppBar, Avatar, IconButton, Paper, Toolbar } from "@material-ui/core";
import WebIcon from "@material-ui/icons/Web";
import MenuIcon from "@material-ui/icons/Menu";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import BuildIcon from "@material-ui/icons/Build";
import useStyles, { StyledTab } from "./Dashboard1.styles";
import ThemeSwitchButton from "../Components/ThemeSwitchButton/ThemeSwitchButton";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [darkmode, setDarkmode] = React.useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Paper className={classes.sideBar} square>
          <div className={classes.profile}>
            <Avatar className={classes.avatar} />
          </div>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <StyledTab icon={<WebIcon />} label="Projects" {...a11yProps(0)} />
            <StyledTab
              label="Business"
              icon={<BusinessCenterIcon />}
              {...a11yProps(1)}
            />
            <StyledTab
              icon={<SchoolIcon />}
              label="Education"
              {...a11yProps(2)}
            />
            <StyledTab icon={<BuildIcon />} label="Skills" {...a11yProps(3)} />
          </Tabs>
        </Paper>
        <div className={classes.contentContainer}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                // onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap className={classes.title}>
                Dashboard
              </Typography>
              <IconButton edge="end">
                <ThemeSwitchButton
                  darkmode={darkmode}
                  setDarkmode={setDarkmode}
                />
              </IconButton>
            </Toolbar>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Projects />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </div>
      </div>
    </ThemeProvider>
  );
}
