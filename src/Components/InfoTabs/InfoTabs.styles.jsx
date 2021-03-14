import { Tab, withStyles, makeStyles, Tabs } from "@material-ui/core";

const outerShadow = "3px 3px 3px #222327, -3px -3px 3px #363636";

export const CustomTab = withStyles((theme) => ({
  root: {
    margin: 10,
  },
  selected: {
    boxShadow: outerShadow,
    borderRadius: 30,
  },
}))(Tab);

export const CustomTabs = withStyles((theme) => ({
  indicator: {
    display: "none",
  },
}))(Tabs);
