import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles, makeStyles } from "@material-ui/core";

const outerShadow = "3px 3px 3px #222327, -3px -3px 3px #363636";
const innerShadow = "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636";

export const SkillBar = withStyles((theme) => ({
  root: {
    height: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    boxShadow: innerShadow,
    background: "transparent",
  },
  bar: {
    margin: 7,
    borderRadius: 10,
    backgroundColor: "whitesmoke",
  },
}))(LinearProgress);

export default makeStyles((theme) => ({
  infoSkills: {
    color: "white",
  },
}));
