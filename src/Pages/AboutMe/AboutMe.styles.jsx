import { makeStyles } from '@material-ui/core/styles';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  profile: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
  outershadow: {
    padding: '10px',
    boxShadow: outerShadow,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  myInfo_profileImg: {
    boxShadow: innerShadow,
    padding: '15px',
    marginBottom: '15px',
  },
  myInfo_bio: {
    color: theme.palette.text.secondary,
  },
  infoTabs_container: {
    minHeight: '100vh',
  },
  highlight: {
    color: theme.palette.primary.light,
  },
}));
