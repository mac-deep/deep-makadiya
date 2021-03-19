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
      background: 'transparent',
    },
  },
}))(Fab);

export default makeStyles((theme) => ({
  homepage: {
    background: theme.palette.background.default,
    minHeight: '100vh',
  },
  fullHeight: {
    height: '100vh',
  },
  profileImg: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
  imageBox: {
    boxShadow: innerShadow,
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '50%',
  },
  outershadow: {
    padding: '10px',
    borderRadius: '50%',
    boxShadow: outerShadow,
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
