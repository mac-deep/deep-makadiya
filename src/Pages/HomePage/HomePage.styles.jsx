import { withStyles, Fab, makeStyles } from '@material-ui/core';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export const CustomFab = withStyles((theme) => ({
  root: {
    boxShadow: outerShadow,
    transform: 'all 0.3s ease',
    background: theme.palette.background.paper,
    padding: '0 20px',
    margin: '10px',
    color: theme.palette.primary.light,
    '&:hover': {
      color: theme.palette.primary.main,
      boxShadow: innerShadow,
      background: theme.palette.background.default,
    },
  },
}))(Fab);

export default makeStyles((theme) => ({
  homepage: {
    background: theme.palette.background.default,
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  fullHeight: {
    zIndex: 100,
    height: '100vh',
  },
  profileImg: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  imageBox: {
    boxShadow: innerShadow,
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '50%',
    background: theme.palette.background.default,
  },
  outershadow: {
    padding: '10px',
    borderRadius: '50%',
    boxShadow: outerShadow,
    background: theme.palette.background.default,
  },
  menuBtn: {
    position: 'fixed',
    top: '30px',
    right: '30px',
    color: 'white',

    '&:hover': {
      color: 'white',
    },
  },
  effects: {
    zIndex: '50',
  },
}));
