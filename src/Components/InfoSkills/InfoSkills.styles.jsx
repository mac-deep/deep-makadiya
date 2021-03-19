import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles, makeStyles } from '@material-ui/core';
import { innerShadow } from '../../Theme/Colors';

export const SkillBar = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    boxShadow: innerShadow,
    background: 'transparent',
  },
  bar: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.light,
  },
}))(LinearProgress);

export default makeStyles((theme) => ({
  infoSkills: {
    color: 'white',
  },
}));
