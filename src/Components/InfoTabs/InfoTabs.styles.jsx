import { Tab, withStyles, Tabs, makeStyles } from '@material-ui/core';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export const CustomTab = withStyles((theme) => ({
  root: {
    margin: 10,
    borderRadius: 20,
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.background.paper,
    boxShadow: innerShadow,
    zIndex: 100,
    '&:hover': {
      boxShadow: outerShadow,
    },
  },
  selected: {
    boxShadow: outerShadow,
    borderRadius: 20,
  },
}))(Tab);

export const CustomTabs = withStyles((theme) => ({
  indicator: {
    display: 'none',
  },
}))(Tabs);

export default makeStyles((theme) => ({
  dashes: {
    position: 'relative',
    top: 35,
    borderBottom: '2px dashed #363636',
    zIndex: 1,
  },
  container: {
    marginTop: 20,
  },
}));
