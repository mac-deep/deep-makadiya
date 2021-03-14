import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import ThemeSwitchButton from "./Components/ThemeSwitchButton/ThemeSwitchButton";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Dashboard1 from "./Dashboard/Dashboard1";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import { Modal } from "@material-ui/core";
import { HoverButton } from "./Components/SocialLinks/SocialLinks.styles";
import Navbar from "./Components/Navbar/Navbar";
import MenuIcon from "@material-ui/icons/Menu";

function App() {
    const [darkmode, setDarkmode] = React.useState(false);
    const theme = createMuiTheme({
        palette: {
            type: darkmode ? "dark" : "light",
        },
    });

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* <div className="darkmode-btn">
                <ThemeSwitchButton darkmode={darkmode} setDarkmode={setDarkmode} />
            </div> */}
            <ThemeProvider theme={theme}>
                <HoverButton onClick={handleOpen} className="menuBtn">
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
                </Switch>
            </ThemeProvider>
        </>
    );
}

export default App;
