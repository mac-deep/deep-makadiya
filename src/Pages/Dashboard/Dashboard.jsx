// import React from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

// import useStyles from "./Dashboard.styles";
// import Sidebar from "../../Components/Sidebar/Sidebar";

// import ThemeSwitchButton from "../../Components/ThemeSwitchButton/ThemeSwitchButton";

// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import AddProject from "../../Components/AddProject/AddProject";
// import AddSkills from "../../Components/AddSkills/AddSkills";
// import AddExperience from "../../Components/AddExperience/AddExperience";

// function Dashboard(props) {
//   const { history } = props;
//   const [darkmode, setDarkmode] = React.useState(false);
//   const classes = useStyles();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const theme = createMuiTheme({
//     palette: {
//       type: darkmode ? "dark" : "light",
//     },
//   });

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   //   const container =
//   //     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <ThemeProvider theme={theme}>
//       <div className={classes.root}>
//         <CssBaseline />
//         <nav className={classes.drawer} aria-label="mailbox folders">
//           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//           <Hidden smUp implementation="css">
//             <Drawer
//               // container={container}
//               variant="temporary"
//               anchor="left"
//               open={mobileOpen}
//               onClose={handleDrawerToggle}
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               ModalProps={{
//                 keepMounted: true, // Better open performance on mobile.
//               }}
//             >
//               <Sidebar />
//             </Drawer>
//           </Hidden>
//           <Hidden xsDown implementation="css">
//             <Drawer
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               variant="permanent"
//               open
//             >
//               <Sidebar />
//             </Drawer>
//           </Hidden>
//         </nav>
//         <div className={classes.container}>
//           {/* <AppBar position="fixed" className={classes.appBar}>
//             <Toolbar>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 edge="start"
//                 onClick={handleDrawerToggle}
//                 className={classes.menuButton}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6" noWrap className={classes.title}>
//                 Dashboard
//               </Typography>
//               <IconButton edge="end">
//                 <ThemeSwitchButton
//                   darkmode={darkmode}
//                   setDarkmode={setDarkmode}
//                 />
//               </IconButton>
//             </Toolbar>
//           </AppBar> */}
//           <main className={classes.content}>
//             <div className={classes.toolbar} />
//             {}
//           </main>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default withRouter(Dashboard);
