import { withStyles, makeStyles, LinearProgress } from '@material-ui/core';
import { innerShadow } from '../../Theme/Colors';

export const SkillBar = withStyles((theme) => ({
  root: {
    height: 18,
    borderRadius: 5,
    boxShadow: innerShadow,
    background: 'transparent',
  },
  bar: {
    margin: 6,
    borderRadius: 5,
    backgroundColor: theme.palette.primary.light,
  },
}))(LinearProgress);

export default makeStyles((theme) => ({
  infoSkills: {
    color: 'white',
  },
}));
