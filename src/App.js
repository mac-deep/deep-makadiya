import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import ThemeSwitchButton from "./Components/ThemeSwitchButton/ThemeSwitchButton";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Dashboard1 from "./Dashboard/Dashboard1";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });

  return (
    <>
      {/* <div className="darkmode-btn">
        <ThemeSwitchButton darkmode={darkmode} setDarkmode={setDarkmode} />
      </div> */}
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard1" component={Dashboard1} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
