import { Tab, withStyles, Tabs, makeStyles } from '@material-ui/core';
import { outerShadow } from '../../Theme/Colors';

export const CustomTab = withStyles((theme) => ({
  root: {
    margin: 10,
    borderRadius: 30,
    '&:hover': {
      boxShadow: outerShadow,
    },
  },
  selected: {
    boxShadow: outerShadow,
    borderRadius: 30,
    transition: 'all 0.3s ease',
  },
}))(Tab);

export const CustomTabs = withStyles((theme) => ({
  indicator: {
    display: 'none',
  },
}))(Tabs);

export default makeStyles((theme) => ({}));
