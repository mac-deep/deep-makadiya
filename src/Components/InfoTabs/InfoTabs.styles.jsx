import { Tab, withStyles, Tabs } from '@material-ui/core';
import { outerShadow } from '../../Theme/Colors';

export const CustomTab = withStyles((theme) => ({
  root: {
    margin: 10,
    // boxShadow: innerShadow,
    borderRadius: 30,
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
