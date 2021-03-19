import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
// import ThemeSwitchButton from './Components/ThemeSwitchButton/ThemeSwitchButton';
import Dashboard1 from './Dashboard/Dashboard1';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutMe from './Pages/AboutMe/AboutMe';
import { CssBaseline, Modal } from '@material-ui/core';
import { HoverButton } from './Components/SocialLinks/SocialLinks.styles';
import Navbar from './Components/Navbar/Navbar';
import MenuIcon from '@material-ui/icons/Menu';
import Auth from './Components/Auth/Auth';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import { withTheme } from './Theme/Theme';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <HoverButton disableFocusRipple onClick={handleOpen} style={{ position: 'fixed', top: '30px', right: '30px' }}>
        <MenuIcon />
      </HoverButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Navbar handleClose={handleClose} />
      </Modal>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard1" component={Dashboard1} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/portfolio" component={PortfolioPage} />
      </Switch>
    </>
  );
}

export default withTheme(App);
