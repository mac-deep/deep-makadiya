import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import { bgDark } from './Colors';

// const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//     primary: green,
//     secondary: purple,
//     background: {
//       paper: bgBlack50,
//       default: bgBlack50,
//     },
//     text: {
//       primary: textBlack700,
//       secondary: textBlack600,
//     },
//   },
//   typography: {
//     fontFamily: 'Poppins',
//   },
// });

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#eba14d',
      main: '#ff9c07',
    },
    secondary: purple,
    background: {
      paper: bgDark,
      default: bgDark,
    },
    text: {
      primary: '#ffffff',
      secondary: '#999999',
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
