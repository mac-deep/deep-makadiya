import { withStyles, Button } from '@material-ui/core';
import { innerShadow, outerShadow } from '../Theme/Colors';

const CustomButton = withStyles((theme) => ({
  root: {
    boxShadow: outerShadow,
    // transform: 'all 0.3s ease',
    padding: '10px 15px',
    borderRadius: '1em',
    margin: '10px 0',
  },
}))(Button);

export default CustomButton;
