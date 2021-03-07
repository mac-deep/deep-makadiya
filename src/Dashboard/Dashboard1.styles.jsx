import { Tab, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const tabsWidth = 300;
const appBarHeight = 60;

export const StyledTab = withStyles({
  root: {
    minWidth: `${tabsWidth}px`,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
})(Tab);

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    maxWidth: `${tabsWidth}px`,
    flexGrow: 1,
    borderRight: `1px solid ${theme.palette.divider}`,
    textAlign: "left",
  },
  sideBar: {
    width: `${tabsWidth}px`,
    height: "100%",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  title: {
    flexGrow: 1,
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 0",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  appBar: {
    width: `calc(100% - ${tabsWidth}px)`,
    marginLeft: `${tabsWidth}px`,
    height: `${appBarHeight}px`,
  },
  contentContainer: {
    marginTop: `${appBarHeight}px`,
    display: "flex",
    flexGrow: 1,
    overflowX: "scroll",
    flexDirection: "column",
  },
}));
