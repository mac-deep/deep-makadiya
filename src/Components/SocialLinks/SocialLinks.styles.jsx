import { withStyles, IconButton, makeStyles } from '@material-ui/core';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export const HoverButton = withStyles((theme) => ({
  root: {
    boxShadow: outerShadow,
    transform: 'all 0.3s ease',
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.background.default,
    borderRadius: '20px',
    '&:hover': {
      boxShadow: innerShadow,
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}))(IconButton);

export default makeStyles((theme) => ({
  container: {
    margin: '5px 0',
  },
  item: {
    padding: theme.spacing(1),
  },
}));
