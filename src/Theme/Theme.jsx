import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { Component } from 'react';
import { green, purple } from '@material-ui/core/colors';
import { bgBlack50, textBlack600, textBlack700 } from './Colors';
// import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: purple,
    background: {
      paper: bgBlack50,
      default: bgBlack50,
    },
    text: {
      primary: textBlack700,
      secondary: textBlack600,
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

// const lightTheme = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: green,
//     secondary: purple,
//     background: {
//         paper: ,
//         default: bgBlack50,
//     },
//     text: {
//       primary: textBlack700,
//       secondary: textBlack600,
//     },
//   },
// });

const Theme = (props) => {
  const { children } = props;
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export const withTheme = (Component) => {
  return (props) => {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    );
  };
};
