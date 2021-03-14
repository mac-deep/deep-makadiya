import { makeStyles } from "@material-ui/core";

const outerShadow = "3px 3px 3px #222327, -3px -3px 3px #363636";
const innerShadow = "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636";

export default makeStyles((theme) => ({
  paper: {
    padding: "20px",
    backgroundColor: "transparent",
    boxShadow: outerShadow,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
