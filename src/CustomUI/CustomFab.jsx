import { withStyles, Fab } from '@material-ui/core';
import { outerShadow, innerShadow } from '../Theme/Colors';

const CustomFab = withStyles((theme) => ({
  root: {
    boxShadow: outerShadow,
    transform: 'all 0.3s ease',
    background: theme.palette.background.paper,
    padding: '0 20px',
    margin: '10px',
    borderRadius: 20,
    color: theme.palette.primary.light,
    '&:hover': {
      color: theme.palette.primary.main,
      boxShadow: innerShadow,
      background: theme.palette.background.default,
    },
  },
}))(Fab);

export default CustomFab;
